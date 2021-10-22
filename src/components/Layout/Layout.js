import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import EditProfile from '../Profile/EditProfile';
import Profile from '../Profile/Profile';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import LandPage from '../LandingPage/LandPage';
import { useDispatch, useSelector } from 'react-redux';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [isLogged, set_is_logged] = useState();
  const user = useSelector(store => store.user);

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
          <Redirect exact from="/" to="/home" />

          <Route exact path="/home">
          { user.getUser ? (
            <Main
              image={image}
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              component={<LandPage />}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              handleRtlChange={handleRtlChange}
              handleImageChange={handleImageChange}
            />
          ) :  (
          
            <Main
            image={image}
            toggled={toggled}
            collapsed={collapsed}
            rtl={rtl}
            component={<LandPage />}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleRtlChange={handleRtlChange}
            handleImageChange={handleImageChange}
          />
          )}
          </Route>

          <Route exact path="/edit-profile" >
            { user.getUser ? 
              (
                <>
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
                  component={<EditProfile />}
                  handleToggleSidebar={handleToggleSidebar}
                  handleCollapsedChange={handleCollapsedChange}
                  handleRtlChange={handleRtlChange}
                  handleImageChange={handleImageChange}
                  />
                </>
              )
            :
              <Redirect to="/" />
            }
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/profile"
          >
            { user.getUser ?
              <Aside
                image={image}
                collapsed={collapsed}
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
              />
            :
            //  <button onCLick={() =>{signOut()}}> LOG IN<AmplifySignOut /></button>
            null
            }


            <Main
              image={image}
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              component={<Profile />} 
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