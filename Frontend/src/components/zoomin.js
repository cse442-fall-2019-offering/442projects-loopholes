import React from 'react';
import { useState } from 'react';
import {Button, Card, Image, Modal} from 'react-bootstrap';
import HomepageCard from 'homepageCard.js'

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
                    Zoom
                </Button>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                     <Modal.Header closeButton/>
                     <HomepageCard/>
                  </Modal>
            </div>
        );
    }
}
export default zoomIn;
