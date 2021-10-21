import './App.css';
import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries';
import Layout from './components/Layout/Layout';
import { createUser } from './graphql/mutations';
import Messages from './components/Messages/Messages';
import 'react-pro-sidebar/dist/css/styles.css';
import { Hub, Logger } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const logger = new Logger('My-Logger');
function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  console.log('why');
  console.log('user is in app:', user);
    /**
   * Listener
   * Listens for Auth Events.
   * @param {*} data 
   */
  const listener = (data) => {
    
  switch (data.payload.event) {
      case 'signIn':
          logger.info('user signed in',);
          checkIfUserHasProfile();
          dispatch({ 
            type: 'FETCH_USER',
            payload: data.payload.data.attributes.sub
          });
          break;
      case 'signUp':
          logger.info('user signed up');
          createUserFunc(data.payload.data.userSub);
          break;
      case 'signOut':
          logger.info('user signed out');
          dispatch({ type: 'LOGOUT' });
          break;
      case 'signIn_failure':
          logger.error('user sign in failed');
          break;
      case 'tokenRefresh':
          logger.info('token refresh succeeded');
          break;
      case 'tokenRefresh_failure':
          logger.error('token refresh failed');
          break;
      case 'configured':
          logger.info('the Auth module is configured');
  }
  }
  Hub.listen('auth', listener);

  /**
   * Check if User Has Profile
   * This logic needs refactoring but will address that down the road
   * @param {user sub from aws} user 
   */
  async function checkIfUserHasProfile(user) {
    try {
      const userProfile = await API.graphql({ query: queries.getUser, variables: { id: '7c04b33b-4368-4691-8cc7-72a20c9427ab' }});
      console.log('user profile', userProfile);
    } catch (err) {
      console.log('error getting user:', err)
      createUserFunc(user);
    }
  }

    /**
   * Create User Function
   * This creates a record in dynamoDB used for Profile - different from cognito user account
   * @param {user sub from aws} user 
   */
  async function createUserFunc(user) {
    try {
      await API.graphql(graphqlOperation(createUser, {input: {id: user, userId: user}}))
    } catch (err) {
    }
  }


  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={Messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}


export default App;
