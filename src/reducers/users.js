import { handleActions } from 'redux-actions';

import { userActions } from '../actions/users';

const initState = {
  users: [],
  page: 1,
  total: 1,
  isLoading: false,
  isLoaded: false,
};

const userReducer = handleActions(
  {
    [userActions.getUsersRequest]: (state) => {
      return { ...state, isLoading: true, isLoaded: false };
    },
    [userActions.getUsersSuccess]: (state, { payload }) => {
      return {
        ...state,
        users: payload.data,
        page: payload.page,
        total: payload.total,
        isLoading: false,
        isLoaded: true,
      };
    },
    [userActions.getUsersFailure]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false, isLoaded: true };
    },
  },
  initState
);

export default userReducer;
