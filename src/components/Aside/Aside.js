import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
// import sidebarBg from '../../assets/bg2.jpeg';
import { FaFire } from 'react-icons/fa'
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import Dashboard from '../Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const [isLogged, set_is_logged] = useState(false)
  const user = useSelector(store => store.user);


  
  // if(Object.keys(user).length === 0) {
  //   console.log('NOT user!!!!!!!!!!!!!!!!!!!!!!');
  // } else {
  //   console.log(' user !!!!!!!!!!!!!!!!!!!!!!');
  //   getUser();
  // }

  // async function getUser() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
      
  //   } catch (error) {
  //     console.log('failed user retrieval', error);
  //   }
  // }
  // useEffect(() => {
  //   checkUser();
  // }, []);


  // function checkUser() {
  //   if(user) {
  //     set_is_logged(true);
  //   } 
  // }

  // function signOut() {
  //   try {
  //       // await Auth.signOut();
  //       console.log('got in here sign out');
  //       dispatch({ type: 'LOGOUT' });
  //       set_is_logged(false);
  //   } catch (error) {
  //       console.log('error signing out: ', error);
  //   }
  // }

  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
        <Dashboard />
      </SidebarHeader>

      <SidebarContent>

        <Menu iconShape="circle">
          <MenuItem
            icon={<SideBarIcon icon={<FaFire size="28" />} />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'Home' })}
          </MenuItem>
        </Menu>

        <Menu iconShape="circle">
          <MenuItem
            icon={<SideBarIcon icon={<FaFire size="28" />} />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            <Link to="/profile">{intl.formatMessage({ id: 'Profile' })}</Link>
          </MenuItem>
        </Menu>

        <Menu iconShape="circle">
          <MenuItem
            icon={<SideBarIcon icon={<FaFire size="28" />} />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            <Link to="/edit-profile">{intl.formatMessage({ id: 'Edit_Profile' })}</Link>
          </MenuItem>
        </Menu>

        <Menu iconShape="circle">
          <MenuItem
            icon={<SideBarIcon icon={<FaFire size="28" />} />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            <Link to="/the-wall">{intl.formatMessage({ id: 'The_Wall' })}</Link>
          </MenuItem>
        </Menu>

        <Menu iconShape="circle">
          <MenuItem
            icon={<SideBarIcon icon={<FaFire size="28" />} />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            <Link to="/admin">{intl.formatMessage({ id: 'Admin' })}</Link>
          </MenuItem>
        </Menu>


        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'Settings' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem
              icon={<SideBarIcon icon={<FaFire size="28" />} />}
              suffix={<span className="badge red">{intl.formatMessage({ id: 'Edit_Profile' })}</span>}
            >
              <Link to="/edit-profile">{intl.formatMessage({ id: 'Edit_Profile' })}</Link>
            </MenuItem>
              <Link to="/profile">{intl.formatMessage({ id: 'Edit_Account' })} 3</Link>
            <MenuItem>
              <Link to="/profile">{intl.formatMessage({ id: 'Edit_Privacy' })} 3</Link>
            </MenuItem>
          </SubMenu>

          {/* <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu> */}

          {/* <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu> */}
          
        </Menu>

      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <AmplifySignOut />
         {/* <AmplifySignOut /> */}
          { user.getUser ?
          <AmplifySignOut />
            // <button onClick={() =>{signOut()}}>LOG OUT </button>
           :
          //  <button onCLick={() =>{signOut()}}> LOG IN<AmplifySignOut /></button>
           null
          }

          {/* <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a> */}
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

export default Aside;