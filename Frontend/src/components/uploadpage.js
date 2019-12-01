import React from "react";
import ImageUploader from "../firebase/ImageUploader";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useState} from "react";
import Button from "react-bootstrap/Button";


function UploadForm(upstate) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
    }
    setValidated(true);   
    if(form.checkValidity() === true){
         startUpload();
    }
  };
    
  const startUpload = () => {
    const { eventTitle, eventDate, eventTime, eventLocation } = upstate;
        let sender = new ImageUploader(
            upstate._imgToUpload,
            upstate._nameToUpload,
            eventTitle,
            eventDate,
            eventTime,
            eventLocation
        );
        sender.sendImageToFirebaseStorage();
  };

  const onTextInputChange = (key, e) => {
    upstate.setState({ [key]: e.target.value });
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
            value={upstate.eventTitle}
            onSubmit ={e=>this.onTextInputChange("eventTitle", e)}
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
            value={upstate.eventDate}
            min="2019-12-03"
            onSubmit ={e => this.onTextInputChange("eventDate", e)}
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
            value={upstate.eventTime}
            onSubmit ={e=>this.onTextInputChange("eventTime", e)}
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
            value={upstate.eventLocation}
            onSubmit ={e=>this.onTextInputChange("eventLocation", e)}
              />
          <Form.Control.Feedback type="invalid">
            Please provide a location.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit" onClick={handleSubmit}>
        Upload
      </Button>
    </Form>
  );
}


class UploadPage extends React.Component {
  state = {
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventLocation: ""
  };

  choseFileHandler = event => {
    this._imgToUpload = event.target.files[0];
    var td = new Date();
    var yr = td.getFullYear();
    var mon = String(td.getMonth() + 1).padStart(2, "0");
    var day = String(td.getDate()).padStart(2, "0");
    var hr = String(td.getHours());
    var min = String(td.getMinutes());
    var sec = String(td.getSeconds());
    this._nameToUpload = yr + mon + day + hr + min + sec;
  };


  render() {
    const { eventTitle, eventDate, eventTime, eventLocation } = this.state;
    return (
      <div className={"page_content"}>
        <h1> Upload a File to Make a Post </h1><br></br>
        <input type="file" onChange={this.choseFileHandler} /><br></br>
        <br></br>
        <UploadForm value={this.state} />
      </div>
    );
  }
}

export default UploadPage;