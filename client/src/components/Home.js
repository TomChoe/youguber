import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './partials/Header';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.renderButtons = this.renderButtons.bind(this);
	}

	renderButtons() {
		return <div>
			     <Link to="/signup"><button className="btn btn-primary">SignUp</button></Link>{' '}
			     <Link to="/login"><button className="btn btn-warning">LogIn</button></Link>
			   </div>
	}

	render() {
		return (
		  <div align="center">
			<Header isLoggedIn={this.props.isLoggedIn} />
			<div className="card home" style={{width: '25rem'}}>
			  <div className="card-body">
				<h1 className="card-title text-info">YouGuber</h1>
				<h2 className="card-subtitle mb-2 text-warning">Youtube&reg; search app</h2>
				<br/>
				{this.props.isLoggedIn ? <small style={{color: 'white'}}>You are logged in</small> : <small style={{color: 'white'}}>Must sign up or log in to save videos</small>}
				<br/>
				<br/>
				{this.props.isLoggedIn ? <Link to="/videos">Go to videos</Link> : this.renderButtons()}
			  </div>
			</div>
		  </div>
		)
	}
}