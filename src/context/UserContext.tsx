'use client';

import {
  UpdateUserProps,
  logoutUserAction,
  updateUserAction,
} from '@/reducers/user/actions';
import { UserState, userReducer } from '@/reducers/user/reducer';
import { useCallback, useEffect, useReducer } from 'react';
import { createContext } from 'use-context-selector';
import { User } from '@/@types/user/user';
import axios from 'axios';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { getUserMeLoader } from '@/data/auth-service/get-user-me-loader';
import { logoutAction } from '@/data/actions/auth-actions';
// import { getAuthToken } from '@/utils/get-token';

interface UserContextType extends UserState {
  updateUser: (user: UpdateUserProps) => void;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    userReducer,
    {
      username: '',
      user_id: 0,
      email: '',
      token: '',
      phone: '',
      type: '',
    },
    (initialState) => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem('@ampara:user-1.0.0');
        if (user) {
          const authToken = getAuthTokenClient();
          const obj = JSON.parse(user);
          if (!authToken) return initialState;

          return {
            ...obj,
          };
        }
      }
      return initialState;
    },
  );

  const { username, email, token, phone, type, user_id } = state;


  const updateUser = useCallback((user: UpdateUserProps) => {
    dispatch(updateUserAction(user));
  }, []);

  const logout = useCallback(() => {
    dispatch(logoutUserAction());
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem('@ampara:user-1.0.0', stateJSON);
  }, [state]);

  const authToken = getAuthTokenClient();

  useEffect(() => {
    if (!authToken) {
      logout();
    }
  }, [authToken]);

  //   useEffect(() => {
  //     axios.interceptors.response.use(
  //       (response) => response,
  //       (err) => {
  //         if (err.response.data.message === 'Unauthorized') {
  //           logout();
  //         }
  //         console.log(err);
  //         throw err;
  //       },
  //     );
  //   }, [state.token]);

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        token,
        phone,
        type,
        user_id,
        updateUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
