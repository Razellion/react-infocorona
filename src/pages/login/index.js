import React, { useState } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../service';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        const cookieToken = res.token;
        const cookieUser = res.userId;
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <div className="loginPage">
      <h3>Please Login</h3>
      <form
        className="login_form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitLogin();
        }}
      >
        <label htmlFor="username">
          Username:
          <input
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" disabled={isLoginLoading} value="Submit" />
      </form>
    </div>
  );
};

export default Login;
