import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

class zoomIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }
    render(){
        return(
            <div>
            <CardColumns>
            <Card border="primary" bg="light" text="dark">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" target="_blank"><Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg"/></Nav.Link>
                </Nav.Item>
            </Nav>
    <Card.Body>
      <Card.Title>International Tea Time
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
    <Card.Footer>
            <div className="text-right">
                <Form.Check text="dark" type="checkbox" label="Like" />
            </div>
        
    </Card.Footer>
  </Card>
</CardColumns>
    </div>
        );
    }
}
export default zoomIn;