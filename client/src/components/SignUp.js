import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './partials/Header';

export default class SignUp extends Component {
	constructor(props) {
		super();
		this.state ={
			userName: '',
			passWord: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	handleChange(e) {
	    let name = e.target.name;
	    let value = e.target.value;
	    this.setState({[name]: value});
	}

	formSubmit(e) {
		e.preventDefault();
		this.props.userSignUp(this.state);
	}

	render() {
		return (
			<div align="center">
			  <Header />
			  <br/>
			  <form className="form-signin" onSubmit={this.formSubmit}>
      			<h1 className="h3 mb-3 font-weight-normal" style={{color: 'white'}}>Please Register</h1>
      			<label for="inputEmail" className="sr-only">UserName</label>
			  	<input className="form-control" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="UserName" required autofocus /><br/>
      			<label for="inputPassword" className="sr-only">Password</label>
			  	<input className="form-control" type="password" name="passWord" value={this.state.passWord} onChange={this.handleChange} placeholder="Password" required /><br/>
			  	<input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign Up" />
      			<p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    		  </form>
			  {/*<form onSubmit={this.formSubmit}>
			  	<input className="form-control" type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="UserName" required autofocus /><br/>
			  	<input lassName="sr-only" type="password" name="passWord" value={this.state.passWord} onChange={this.handleChange} placeholder="Password" required /><br/>
			  	<input className="btn btn-lg btn-primary btn-block" type="submit" value="submit" />
			  </form>*/}
			  {this.props.isLoggedIn ? <Redirect to="/videos" /> : ''}
			</div>
		)
	}
}