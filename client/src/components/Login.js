import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './partials/Header';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.props.userLogIn(this.state);
	}

	render() {
		return (
			<div align="center">
			  <Header />
			  <br/>
			  	<form className="form-signin" onSubmit={this.formSubmit}>
      			  <h1 className="h3 mb-3 font-weight-normal" style={{color: 'white'}}>Welcome Back</h1>
      			  <label for="inputEmail" className="sr-only">UserName</label>
			      <input className="form-control" type="text" name="userName" onChange={this.handleChange} placeholder="UserName" required autofocus /><br/>
      			  <label for="inputPassword" className="sr-only">Password</label>
			  	  <input className="form-control" type="password" name="passWord" onChange={this.handleChange} placeholder="Password" required /><br/>
			  	  <input className="btn btn-lg btn-primary btn-block" type="submit" value="Log In" />
      			  <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    		    </form>
			  {/*<form onSubmit={this.formSubmit}>
			    <input className="form-control input-sm chat-input" type="text" name="userName" onChange={this.handleChange} placeholder="username" /><br/>
			    <input className="form-control input-sm chat-input" type="password" name="passWord" onChange={this.handleChange} placeholder="password" /><br/>
			    <input className="btn btn-primary btn-md" type="submit" value="login" />
			  </form>*/}
			  {/*<div className="container">
	    		<div className="row">
	              <div className="col-md-offset-5 col-md-3 mx-auto">
	                <div className="form-login">
	                  <h4>Welcome back</h4>
	                    <form onSubmit={this.formSubmit}>
		    			  <input className="form-control input-sm chat-input" type="text" name="userName" onChange={this.handleChange} placeholder="username" /><br/>
		            			<br/>
					   	  <input className="form-control input-sm chat-input" type="password" name="passWord" onChange={this.handleChange} placeholder="password" /><br/>
		            			<br/>
				          <div className="wrapper">
					        <span className="group-btn">     
					          <input className="btn btn-primary btn-md" type="submit" value="login" />
					        </span>
			              </div>
			             </form>
	            	</div>
				  </div>
			  	</div>
			  </div>*/}
			  {this.props.isLoggedIn ? <Redirect to="/videos" /> : ''}
			</div>


		)
	}
}