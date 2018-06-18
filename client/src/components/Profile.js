import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Services from '../Services';
import Header from './partials/Header';
import VideoFav from './VideoFav';


export default class Profile extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			data: null,
			reDirect: false
		}
		this.deleteFav = this.deleteFav.bind(this);
	}

	componentDidMount() {
		Services.getFavs()
		  .then(favs => {
		  	this.setState({
		  		loaded: true,
		  		data: favs.data
		  	})
		  })
		  .catch(err => {
		  	console.log('error getting favs', err.response)
		  })
	}

	deleteFav(id) {
		Services.deleteFav(id)
		  .then(fav => {
		  	Services.getFavs()
		  	  .then(favs => {
		  	  	this.setState({ data: favs.data })
		  	  })
		  	  .catch(err => {
		  	  	console.log('error on 2nd try', err)
		  	  })
		  })
		  .catch(err => {
		  	console.log('error deleting fav')
		  })
	}

	renderFavs() {
		const userId = this.props.user.id;
		return this.state.data.map(video => {
			if(userId === video.userId) {
				return <VideoFav key={video.id} video={video} delete={this.deleteFav} />
			} else {
				return
			}
		})
	}

	render() {
		console.log('this is the favorites page', this.props.data)
		return (
			<div align="center">
			  <Header isLoggedIn={this.props.isLoggedIn} />
			    <br/>
			    <h1 className="favorites text-info">My Favorites</h1>
			    {this.state.loaded ? this.renderFavs() : ''}
			    
			    {this.props.isLoggedIn ? '' : <Redirect to="/" />}
			</div>
		)
	}
}