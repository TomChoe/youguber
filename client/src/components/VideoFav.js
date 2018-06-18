import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class VideoFav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		}
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}

	render() {
		console.log('this is props for videofav', this.props.video)
		return (
	      <div>
		    <br/>
			  <iframe id="vid"
			  		  width="720" 
			  		  height="405"
			  		  src={`https://www.youtube.com/embed/${this.props.video.favs}`}
			  		  frameBorder="0"
				  	  allowFullScreen>
			  </iframe><br/>
	        <Button color="danger" onClick={this.toggle}>view</Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-dialog-centered">
	          <ModalHeader toggle={this.toggle}>Saved Favorite</ModalHeader>
	          <ModalBody>
			    <iframe id="vid"
		  	  		    width="470" 
			  		    height="345"
			  		    src={`https://www.youtube.com/embed/${this.props.video.favs}`}
			  		    frameBorder="0"
				  	    allowFullScreen>
			    </iframe><br/>
	          </ModalBody>
	          <ModalFooter>
	            <Button color="secondary" onClick={this.toggle}>Close</Button>
	          </ModalFooter>
	        </Modal>{' '}
			  <Button color="warning" onClick={() => this.props.delete(this.props.video.id)} >X</Button>
			  <br/>
			  <br/>
	      </div>
		)
	}
}

// import React from 'react';

// const VideoFav = (props) => {
// 	return (
// 		<div>
// 		<br/>
// 		  <iframe id="vid"
// 		  		  width="720" 
// 		  		  height="405"
// 		  		  src={`https://www.youtube.com/embed/${props.video.favs}`}
// 		  		  frameBorder="0"
// 			  	  allowFullScreen>
// 		  </iframe><br/>
// 		  <button className="btn btn-warning" onClick={() => props.delete(props.video.id)} >Delete from favorites</button>
// 		  <br/>
// 		  <br/>
// 		</div>
// 	)
// }

// export default VideoFav;

	        {/*<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
	          <ModalBody>
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
	            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          </ModalFooter>
	        </Modal>*/}



