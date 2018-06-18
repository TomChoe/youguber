import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './partials/Header';
import Services from '../Services';
import SearchBar from './SearchBar';
import Video from './Video';

export default class Youtube extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		videoDataLoaded: false,
      favDataLoaded: false,
  		videos: null,
      favorites: null,
      nextPageToken: null,
      query: null
  	}
  	this.search = this.search.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  search(query) {
  	Services.getVideos(query) 
  		.then(results => {
  			this.setState({ 
  				videoDataLoaded: true,
  				videos: results.data.items,
          nextPageToken: results.data.nextPageToken,
          query: query
  			})
        // Services.getFavs()
        //   .then(favs => {
        //     console.log('favs were retrieved', favs.data)
        //     this.setState({
        //       favDataLoaded: true,
        //       favorites: favs.data
        //     })
        //   })
        //   .catch(err => {
        //     console.log('error getting favs', err.response)
        //   })
  		})
  		.catch(err => {
  			console.log('error getting videos', err)
  		})
  }

  nextPage(query, token) {
    Services.getMore(query, token)
      .then(moreResults => {
        this.setState({
          videos: [...this.state.videos, ...moreResults.data.items]
        })
      })
      .catch(err => {
        console.log('error getting more videos', err)
      })
  }

  addFavorite(video) {
    video = video + ' ' + this.props.user.id
    Services.addFav(video)
      .then(fav => {
      })
      .catch(err => {
        console.log('error adding fav', err.response)
      })
  }

  renderVideos() {
  	return this.state.videos.map(video => {
      return <Video video={video} key={video.id} add={this.addFavorite} />
      })
  }

	render() {
    console.log('this is the data for videos', this.state.videos)
		return (
			<div align="center">
        <Header isLoggedIn={this.props.isLoggedIn} />
        <div className="search-box">
            <br/>
			    <SearchBar search={this.search} />
			      <br/>
        </div>
        <div className="grid-container">
			   {this.state.videoDataLoaded ? this.renderVideos() : ''}
        </div>
        {this.state.videoDataLoaded ? <button className="btn btn-success" onClick={() => this.nextPage(this.state.query, this.state.nextPageToken)}>More</button> : ''}
        <br/>
        <br/>
        {this.state.videoDataLoaded ? <a href="#top"><button className="btn btn-info">Back to top</button></a> : ''}
        {this.props.isLoggedIn ? '' : <Redirect to="/" />}
			</div>
		)
}
}