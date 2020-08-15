import React from 'react';
import './Login.css';
import logo from '../../assets/slack-logo.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';
import * as actionTypes from '../../context/actionTypes';
import { useStateValue } from '../../context/StateProvider';

const Login = () => {
  const [{ }, dispatch] = useStateValue();
  const signin = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user
        });
        console.log(result);
      }).catch(err => alert(err.message));
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Slack logo" />
        <h1>
          Login To Slack  with Google
        </h1>
        <Button onClick={signin} variant="contained" color="secondary">
          Login By Gooogle
        </Button>
      </div>
    </div>
  )
}

export default Login;
