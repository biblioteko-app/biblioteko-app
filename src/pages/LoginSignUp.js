import React, {useState} from 'react'
import Details from '../components/Login/Details';
import Logout from '../components/Login/Logout';

const LoginSignUp = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const onLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    // Limpar quaisquer informações relacionadas ao usuário autenticado, se necessário
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div>
      {isLoggedIn ? (
        <Logout onLogout={onLogout}/>
      ) : (
        <Details onLogin={onLogin} />
      )}
    </div>
  );
}

export default LoginSignUp