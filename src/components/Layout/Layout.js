import React, { useState } from 'react';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import EditProfile from '../Profile/EditProfile';

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <Router>
    <div className={`flex bg-gray-700 space-x-4 h-screen app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/profile" />

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/edit-profile"
          >
            <Aside
              image={image}
              collapsed={collapsed}
              rtl={rtl}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
            <EditProfile />
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/profile"
          >
            <Aside
              image={image}
              collapsed={collapsed}
              rtl={rtl}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />

            <Main
              image={image}
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              handleRtlChange={handleRtlChange}
              handleImageChange={handleImageChange}
            />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        </div>
  </Router>
    // <div className={`flex bg-gray-700 space-x-4 h-screen app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      


    // </div>
  );
}

export default Layout;