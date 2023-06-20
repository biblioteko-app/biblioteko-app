import React, {useState} from 'react'
import Details from '../components/Login/Details';
import Profile from '../components/Login/Logout';

const LoginSignUp = ({ setLoggedUser, user}) => {

  return (
    <div >
      { user.void === undefined ? (
        <Profile onLogout={setLoggedUser} user={user}/>
      ) : (
        <Details onLogin={setLoggedUser} />
      )}
    </div>
  );
}

export default LoginSignUp