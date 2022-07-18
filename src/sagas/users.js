import { call, cancelled, put, takeLatest } from 'redux-saga/effects';

import { userActions } from '../actions/users';
import * as API from '../services/api';

function* getUsers({ payload }) {
  const error = 'Something went Wrong. Please try again';
  try {
    const resp = yield call(API.getUsers, payload);
    if (resp.status === 200) {
      yield put(userActions.getUsersSuccess(resp.data));
    } else {
      yield put(userActions.getUsersFailure(error));
    }
  } catch (err) {
    yield put(userActions.getUsersFailure(err));
  } finally {
    if (yield cancelled()) {
      console.log('Get user task cancelled.');
    }
  }
}

export default function* getUsersSagas() {
  yield takeLatest(userActions.getUsersRequest, getUsers);
}
