import React, { Component } from 'react';
import './NavBar.css';
import NavBarButton from './NavBarButton';
import NavTitle from './NavTitle';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavTitle />
        <NavBarButton text={'Home'} />
        <NavBarButton text={'About'}/>
        <NavBarButton text={'Login'}/>
      </div>
    );
  }
}
