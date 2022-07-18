import { createActions } from 'redux-actions';

const userActions = createActions({
  GET_USERS_REQUEST: undefined,
  GET_USERS_SUCCESS: undefined,
  GET_USERS_FAILURE: undefined,
});

export { userActions };
