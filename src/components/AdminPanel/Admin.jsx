import React, { useState, useEffect } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
import Buttons from './Buttons';
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
      <div className='adminpanel'>
        <AlertMessage
          style='success'
          message={`Witaj ${userDecoded.name} w panelu admina`}
          open={showUser}
        />
        <Buttons />
      </div>
    </React.Fragment>
  );
};

export default Admin;
