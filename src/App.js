import './App.css';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/Dashboard/SideBar/SideBar';
import { IntlProvider } from 'react-intl';
import Layout from './components/Dashboard/Layout/Layout';
import Messages from './components/Dashboard/Messages/Messages';
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
