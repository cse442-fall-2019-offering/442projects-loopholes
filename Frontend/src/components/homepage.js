import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CardColumns from 'react-bootstrap/CardColumns'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }
    render(){
        return(
<div>
<br></br>
<CardColumns>
  <Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
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
<Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
    <Card.Body>
      <Card.Title>International Tea Time
            <br></br>
            <br></br>
            <small>
                <div className="font-weight-bold">Date:</div> October 2nd
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
  <Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
    <Card.Body>
      <Card.Title>International Tea Time
            <br></br>
            <br></br>
            <small>
                <div className="font-weight-bold">Date:</div> October 9th
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
  <Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
    <Card.Body>
      <Card.Title>International Tea Time
            <br></br>
            <br></br>
            <small>
                <div className="font-weight-bold">Date:</div> October 16th
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
  <Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
    <Card.Body>
      <Card.Title>International Tea Time
            <br></br>
            <br></br>
            <small>
                <div className="font-weight-bold">Date:</div> October 23rd
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
  <Card border="primary" bg="light" text="dark">
    <Card.Img variant="top" src="https://calendarmedia.blob.core.windows.net/assets/cfcab72d-b7b1-442d-bd2d-25097794861c.jpg" />
    <Card.Body>
      <Card.Title>International Tea Time
            <br></br>
            <br></br>
            <small>
                <div className="font-weight-bold">Date:</div> October 30th
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
export default HomePage;
