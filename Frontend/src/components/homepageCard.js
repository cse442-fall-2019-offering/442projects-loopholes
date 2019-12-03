import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import ZoomIn from "./zoomin";

const HomepageCard = props => {
  const {
    imageLink,
    eventTitle,
    eventDate,
    eventTime,
    eventLocation,
    zoomed
  } = props;
  return (
    <Card border="primary" bg="light" text="dark">
      <Nav>
        <Nav.Item>
          <Nav.Link href={imageLink} target="_blank">
            <Card.Img variant="top" src={imageLink} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Card.Body>
        <Card.Title>
          {eventTitle}
          <br></br>
          <br></br>
          <small>
            <div className="font-weight-bold">Date:</div> {eventDate}
            <br></br>
            <br></br>
            <div className="font-weight-bold">Time:</div> {eventTime}
            <br></br>
            <br></br>
            <div className="font-weight-bold">Place:</div> {eventLocation}
          </small>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <div className="text-center">
          {!zoomed && <ZoomIn cardProps={props} />}
        </div>
        <div className="text-right">
          <Form.Check text="dark" type="checkbox" label="Like" />
        </div>
      </Card.Footer>
    </Card>
  );
};

HomepageCard.defaultProps = {
  eventTitle: "Untitled",
  eventDate: "N/A",
  eventTime: "N/A",
  eventPlace: "N/A",
  zoomed: false
};

export default HomepageCard;
