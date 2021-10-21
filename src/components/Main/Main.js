import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import { withAuthenticator } from '@aws-amplify/ui-react'

const Main = ({
  collapsed,
  rtl,
  component,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main className="bg-gray-800 w-full p-4">
      <div className="btn-toggle flex justify-end text-white text-2xl m-1" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
     {component}
     {console.log('component', component)}

     here

      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
      {/* <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div> */}
    </main>
  );
};

export default withAuthenticator(Main);