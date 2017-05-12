import { Link } from 'react-router';
import React, {Component} from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-fixed-top,">
      <ul className="thelist" >
        <section><h4><Link to="/grid" >Grid</Link></h4></section>
        <section><h4><Link to="/levels" activeClassName="active">Levels</Link></h4></section>
      </ul>
    </nav>
  )
}

export default Navbar;
