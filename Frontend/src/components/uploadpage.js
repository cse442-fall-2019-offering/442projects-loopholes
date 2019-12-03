import React from "react";
import ImageUploader from "../firebase/ImageUploader";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const UploadForm = ({
  eventDate,
  eventLocation,
  eventTime,
  eventTitle,
  imageToUpload,
  nameToUpload,
  onInputChange
}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      console.log("We are uploading!");
      startUpload();
    }
  };

  const startUpload = () => {
    let sender = new ImageUploader(
      imageToUpload,
      nameToUpload,
      eventTitle,
      eventDate,
      eventTime,
      eventLocation
    );
    sender.sendImageToFirebaseStorage();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Title"
            value={eventTitle}
            onChange={e => onInputChange("eventTitle", e)}
            onSubmit={e => onInputChange("eventTitle", e)}
          />
          <Form.Control.Feedback type="invalid">
            You must enter a title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Pick a date"
            defaultValue="2019-12-03"
            value={eventDate}
            min="2019-12-03"
            onChange={e => onInputChange("eventDate", e)}
            onSubmit={e => onInputChange("eventDate", e)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="3:00:00"
            defaultValue=""
            required
            value={eventTime}
            onChange={e => onInputChange("eventTime", e)}
            onSubmit={e => onInputChange("eventTime", e)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a time.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            required
            value={eventLocation}
            onChange={e => onInputChange("eventLocation", e)}
            onSubmit={e => onInputChange("eventLocation", e)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a location.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Upload</Button>
    </Form>
  );
};

class UploadPage extends React.Component {
  state = {
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    imageToUpload: null,
    nameToUpload: ""
  };

  choseFileHandler = event => {
    this.setState({ imageToUpload: event.target.files[0] });
    var td = new Date();
    var yr = td.getFullYear();
    var mon = String(td.getMonth() + 1).padStart(2, "0");
    var day = String(td.getDate()).padStart(2, "0");
    var hr = String(td.getHours());
    var min = String(td.getMinutes());
    var sec = String(td.getSeconds());
    this._nameToUpload = yr + mon + day + hr + min + sec;
    this.setState({ nameToUpload: yr + mon + day + hr + min + sec });
  };

  onTextInputChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { eventTitle, eventDate, eventTime, eventLocation } = this.state;
    return (
      <div className={"page_content"}>
        <h1> Upload a File to Make a Post </h1>
        <br></br>
        <input type="file" onChange={this.choseFileHandler} />
        <br></br>
        <br></br>
        <UploadForm onInputChange={this.onTextInputChange} {...this.state} />
      </div>
    );
  }
}

export default UploadPage;
