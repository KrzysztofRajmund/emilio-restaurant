import React, { useState, useEffect } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
import Buttons from './Buttons';

const Admin = () => {
  return (
    <React.Fragment>
      <div className='admin'>
        {/* <AlertMessage
            style='success'
            message={`Witam ${userAdmin.name} w panelu admina`}
            open='true'
          /> */}
        <Buttons />
      </div>
    </React.Fragment>
  );
};

export default Admin;
