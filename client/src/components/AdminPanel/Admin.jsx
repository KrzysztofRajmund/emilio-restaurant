import React, { useState, useEffect } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
import Buttons from './Buttons';
import HeaderNav from './HeaderNav';
//jwt decode
import jwt_decode from 'jwt-decode';

const Admin = () => {
  //decode user to get his data from token
  const userDecoded = jwt_decode(localStorage.getItem('jwtToken'));
  //hooks
  const [showUser, setShowUser] = useState(true);

  useEffect(() => {
    showUserFunc();
  }, []);

  const showUserFunc = () => {
    setTimeout(() => {
      setShowUser(false);
    }, 3500);
  };
  return (
    <React.Fragment>
      <HeaderNav user={userDecoded.name} />
      <div className='adminpanel'>
        <AlertMessage
          tabStyle='success'
          message={`Witaj ${userDecoded.name} w panelu admina`.toUpperCase()}
          open={showUser}
        />
        <Buttons />
      </div>
    </React.Fragment>
  );
};

export default Admin;
