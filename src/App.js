import './App.css';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './components/Layout/Layout';
import Messages from './components/Messages/Messages';
import 'react-pro-sidebar/dist/css/styles.css';

function App() {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={Messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
