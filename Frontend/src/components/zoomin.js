import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class zoomIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
        this.handleZoom = this.handleZoom.bind(this);
    }
    handleZoom(){
        
    }
    render(){
        return(
            <div>
                <br></br>
                <Button 
                variant="primary" disabled onClick={this.handleZoom}>
                    Zoom
                </Button>
            </div>
        );
    }
}
export default zoomIn;