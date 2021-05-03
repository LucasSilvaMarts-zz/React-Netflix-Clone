import React from 'react';
import '../styles/Header.css';
import perfilImage from '../img/Netflix.png';

const Header = ({ black }) => {
  return (
    <header className={ black ? 'black' : '' }>
      <div className="header--logo">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>
          </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={ perfilImage } alt="user"/>
        </a>
      </div>
    </header>
  )
}

export default Header
