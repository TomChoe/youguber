import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(e) {
		this.setState({ input: e.target.value })
	}

	submitForm(e) {
		e.preventDefault();
		this.props.search(this.state.input);
	}

	render() {
		return (
		  <div className="searchBar">
		  	<form onSubmit={this.submitForm}> 
		  	  <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="search videos" />
		  	  <br/>
		  	  <br/>
			  <input className="btn btn-warning"  type="submit" value="search" />
		  	</form>
		  </div>
		)
	}
}