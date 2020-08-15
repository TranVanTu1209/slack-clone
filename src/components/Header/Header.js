import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { Button } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    });
  }
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src="https://source.unsplash.com/avatar/100x100"
          alt="John Doe"
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search for chat..." className="header__input" />
      </div>
      <div className="header__right">
        <LiveHelpIcon />
        <Button variant="contained" color="secondary" onClick={logout} >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Header;
