import React from 'react';
import { useState } from 'react';
import {Button, Card, Image, Modal} from 'react-bootstrap';

class zoomIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow(){
      this.setState({show:true})
    };

    handleClose(){
      this.setState({show:false})
    }

    render(){
        return(
            <div>
                <br></br>
                <Button
                variant="primary"
                onClick={this.handleShow}>
                    Zoom in
                </Button>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                     <Modal.Header closeButton>
                     <Modal.Title>International Tea Time</Modal.Title>
                       </Modal.Header>
                       <Card style={{ width: '31rem' }}>
                        <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg"/>
                         <Card.Body>
                           <Card.Title>
                             <br></br>
                             <br></br>
                             <small>
                                 <div className="font-weight-bold">Date:</div> September 25th
                                 <br></br>
                                 <br></br>
                                 <div className="font-weight-bold">Time:</div> 5:00PM EDT
                                 <br></br>
                                 <br></br>
                                 <div className="font-weight-bold">Place:</div> 240 Student Union, North Campus, UB
                             </small>
                           </Card.Title>
                     </Card.Body>
                   </Card>
                  </Modal>
            </div>
        );
    }
}
export default zoomIn;
