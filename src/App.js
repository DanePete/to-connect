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
import { Auth } from 'aws-amplify';
const logger = new Logger('My-Logger');
function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  console.log('THIS IS OUR USER', user);

  /**
   * Check to see if our user in store 
   * otherwise fetch it
   * added this to handle reload issue until i understand how to do this properly
   */
  if(Object.keys(user).length === 0) {
    getUser();
  }

  async function getUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch({ 
        type: 'FETCH_USER',
        payload: user.attributes.sub
      });
    } catch (error) {
      console.log('no profile found error', error);
    }
  }

    /**
   * Listener
   * Listens for Auth Events.
   * @param {*} data 
   */
  const listener = (data) => {
    
  switch (data.payload.event) {
      case 'signIn':
          logger.info('user signed in',);
          checkIfUserHasProfile(data.payload.data.userSub);
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
      const userProfile = await API.graphql({ query: queries.getUser, variables: { id: user.attributes.sub }});
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
    console.log('user in create user func', user);
    try {
      await API.graphql(graphqlOperation(createUser, {input: {id: user, userId: user}}))
      console.log('got here');
    } catch (err) {
      console.log('error creating user', err);
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
