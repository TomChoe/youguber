import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Services from '../Services';
import Header from './partials/Header';

export default class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state ={
			id: this.props.user.id,
			userName: '',
			passWord: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.edit = this.edit.bind(this);
	}

	handleChange(e) {
	    let name = e.target.name;
	    let value = e.target.value;
	    this.setState({[name]: value});
	}

	edit(e) {
		e.preventDefault();
		console.log('edit profile')
		Services.editUser(this.state)
		  .then(user => {
		    console.log('user edited')
		    this.setState({ reDirect: true })
		  })
		  .catch(err => {
		  	console.log('error editing user', err.response)
		  })
	}

	render() {
		console.log('current user', this.props.user)
		return (
			<div align="center">
			<Header isLoggedIn={this.props.isLoggedIn} />
			<br/>
			  <div className="profile">
				<h1>profile</h1>
				<p>Current UserId:  <small><b>{this.props.user.userName}</b></small></p>
				<p>Current Password:  <small><b>{this.props.user.passWord}</b></small></p>
		      </div>
		      <br/>
		      <small style={{color: 'white'}}>Edit Info</small>
			    <form onSubmit={this.edit}>
			      <label style={{color: 'white'}}>UserName</label><br/>
			      <input type="text" name="userName" onChange={this.handleChange} placeholder={this.props.user.userName} /><br/><br/>
			      <label style={{color: 'white'}}>PassWord</label><br/>
			      <input type="password" name="passWord" onChange={this.handleChange} placeholder={this.props.user.passWord} /><br/><br/>
			      <input className="btn btn-info" type="submit" value="submit edit" /><br/><br/>
			      <small style={{color: 'white'}}>changes made to account will be shown in next login</small>
			    </form>
			   {this.props.isLoggedIn ? '' : <Redirect to="/" />}
			   {this.state.reDirect ? <Redirect to="/" /> : ''}
			</div>
		)
	}
}