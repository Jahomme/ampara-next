import { produce } from 'immer';
import { UserActionTypes } from './actions';
import { User } from '@/domain/user/user';

export interface UserState extends User {}

export function userReducer(state: UserState, action: any) {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER: {
      return produce(state, (draft) => {
        return {
          ...draft,
          ...action.payload,
        };
      });
    }
    case UserActionTypes.LOGOUT_USER: {
      return produce(state, (draft) => {
        draft.username = '';
        draft.email = '';
        draft.token = '';
        draft.user_id = 0;
        draft.phone = '';
        localStorage.removeItem('@seubone:user-1.0.0');
      });
    }

    default:
      return state;
  }
}
