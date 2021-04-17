import React from 'react';
//components
import Buttons from './Buttons';

const Admin = ({ auth }) => {
  console.log(auth, 'auth');
  return (
    <React.Fragment>
      {auth && (
        <div className='admin'>
          <Buttons />
        </div>
      )}
    </React.Fragment>
  );
};

export default Admin;
