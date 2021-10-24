import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

function* fetchUser(action) {
  try {
    const result = yield call([API, 'graphql'], graphqlOperation(queries.getUser, { id: '4ee21158-5a78-495c-95f2-4032e4dbaa02' }))
    yield put({ type: 'SET_USER', payload: result.data });
  } catch (e) {
    console.log('error is', e);
  }
}


// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    // yield axios.post('/api/user/logout', config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default userSaga;
