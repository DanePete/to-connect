import './App.css';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import Layout from './components/Layout/Layout';
import Messages from './components/Messages/Messages';
import 'react-pro-sidebar/dist/css/styles.css';
import { Hub, Logger } from 'aws-amplify';

const logger = new Logger('My-Logger');

async function createUser() {
  try {
    // if (!formState.name || !formState.description) return
    // const todo = { ...formState }
    // setTodos([...todos, todo])
    // setFormState(initialState)
    // await API.graphql(graphqlOperation(createUser, {input: todo}))
  } catch (err) {
    console.log('error creating todo:', err)
  }
}

const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
            logger.info('user signed in');
            console.log('user signed in');
            break;
        case 'signUp':
            logger.info('user signed up');
            console.log('user signed up');



            
            break;
        case 'signOut':
            logger.info('user signed out');
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

function App() {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={Messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
