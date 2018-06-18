import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
	  <div>
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger">
		 <div className="container">
		  <Link className="navbar-brand" to="/">YouGuber</Link>
		    <div className="navbar-nav ml-auto">
		      <Link className="nav-item nav-link" to="/profile">My favorites</Link>
		      <Link className="nav-item nav-link" to="/videos">Search</Link>
		      {props.isLoggedIn ? <Link className="nav-item nav-link" to="/editprofile">Profile</Link> : ''}
		      {props.isLoggedIn ? <a className="nav-item nav-link" href="/">Log Out</a> : ''}
		    </div>
		  </div>
		</nav>
	  </div>
	)
}

export default Header;