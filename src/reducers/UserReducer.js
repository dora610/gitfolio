import { AUTH_USER } from './action.type';

const UserReducer = (state, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return { ...state, userName: 'Binod' };

    default:
      return state;
  }
};

export default UserReducer;
