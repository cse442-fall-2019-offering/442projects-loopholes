import React from 'react';
import { useState } from 'react';
import {Button, Card, Image, Modal} from 'react-bootstrap';

class zoomIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            imageLink,
            title: "Untitled",
            date: "N/A",
            time: "N/A",
            place: "N/A"

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
                    Zoom
                </Button>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                     <Modal.Header closeButton/>
                     <Card border="primary" bg="light" text="dark" style={{ width: '31rem' }}>
                         <Card.Img variant="top" src={imageLink} />
                             <Card.Body>
                                 <Card.Title>{title}
                                         <br></br>
                                         <br></br>
                                         <small>
                                             <div className="font-weight-bold">Date:</div> {date}
                                             <br></br>
                                             <br></br>
                                             <div className="font-weight-bold">Time:</div> {time}
                                             <br></br>
                                             <br></br>
                                             <div className="font-weight-bold">Place:</div> {place}
                                         </small>
                                 </Card.Title>
                             </Card.Body>
                         <Card.Footer>
                             <div className="text-right">
                                 <Form.Check text="dark" type="checkbox" label="Like" />
                             </div>
                         </Card.Footer>
                     </Card>
                  </Modal>
            </div>
        );
    }
}
export default ZoomIn;
