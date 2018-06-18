import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false,
			modal: false
		}
		this.buttonClick = this.buttonClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	buttonClick() {
		this.setState({
			click: !false
		})
		this.props.add(this.props.video.id.videoId);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}

	render() {
		const image = this.props.video.snippet.thumbnails.high.url;
		return (
		  <div>
	        <Button color="dark" onClick={this.toggle}><img className="img-fluid" src={image} style={{width: '425px', height: '345px'}}/><br/></Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-dialog-centered">
	          <ModalHeader toggle={this.toggle}>{this.props.video.snippet.title}</ModalHeader>
	          <ModalBody>
			    <iframe id="vid"
		    		type="text/html"
			  		width="470"
			  		height="345"
			  		src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
			  		frameBorder="0"
			  		allowFullScreen>
				</iframe>
	          </ModalBody>
	          <ModalFooter>
	          	{this.state.click ? '' : <button className="btn btn-danger" onClick={this.buttonClick}>Add to Favorites</button>}
	            <Button color="secondary" onClick={this.toggle}>Close</Button>
	          </ModalFooter>
	        </Modal>
			  <br/>
			  <br/>
		  </div>
		)
	}
}
// import React from 'react';

// const Video = (props) => {
// 	return (
// 		<div>
// 		  <iframe id="vid"
// 		  		  width="420" 
// 		  		  height="345"
// 		  		  src={`https://www.youtube.com/embed/${props.video.id.videoId}`}>
// 		  </iframe><br/>
// 		  <button className="btn btn-danger" onClick={() => props.add(props.video.id.videoId)} >Add to Favorites</button>
// 		  <br/>
// 		  <br/>
// 		</div>
// 	)
// }

// export default Video;

		  {/*<div>
		    <iframe id="vid"  <img src={image} style={{width: '425px', height: '345px'}}/><br/>
		    		type="text/html"
			  		width="420"
			  		height="345"
			  		src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
			  		frameBorder="0"
			  		allowFullScreen>
			</iframe><br/>
			{this.state.click ? '' : <button className="btn btn-danger" onClick={this.buttonClick}>Add to Favorites</button>}
			  <br/>
			  <br/>
		  </div>*/}