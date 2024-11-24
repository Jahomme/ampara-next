export interface UpdateUserProps {
  username?: string;
  email?: string;
  token: string;
  phone?: string;
  type?: string;
  user_id: string;
}

export enum UserActionTypes {
  UPDATE_USER = 'UPDATE_USER',
  LOGOUT_USER = 'LOGOUT_USER',
}

export function updateUserAction(user: UpdateUserProps) {
  return {
    type: UserActionTypes.UPDATE_USER,
    payload: user,
  };
}

export function logoutUserAction() {
  return {
    type: UserActionTypes.LOGOUT_USER,
    payload: {},
  };
}
