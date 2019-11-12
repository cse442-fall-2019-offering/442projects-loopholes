import React from "react";
import ImageUploader from "../firebase/ImageUploader";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UploadWait from "./uploadWait.js";
import Button from 'react-bootstrap/Button'


class UploadPage extends React.Component {

    state = {
        eventTitle: "",
        eventDate: "",
        eventTime: "",
        eventLocation: ""
    };

    waiter = null;

    constructor(props) {
        super(props);
        this.state = {
            eventTitle: "",
            eventDate: "",
            eventTime: "",
            eventLocation: ""
        };
        this.waiter = new UploadWait();
    }

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

    startUpload = () => {
        const {eventTitle, eventDate, eventTime, eventLocation} = this.state;
        let sender = new ImageUploader(
            this._imgToUpload,
            this._nameToUpload,
            eventTitle,
            eventDate,
            eventTime,
            eventLocation
        );
        sender.sendImageToFirebaseStorage(this.waiter);
        this.waiter.startLoad();
    };

    onTextInputChange = (key, e) => {
        this.setState({[key]: e.target.value});
    };

    render() {
        const {eventTitle, eventDate, eventTime, eventLocation} = this.state;
        return (
            <div className={"page_content"} id="upload_page">
                <h1> Upload a Filto Make a Post </h1><br></br>
                <input type="file" onChange={this.choseFileHandler}/><br></br>
                <br></br>
                <Form>
                    <Form.Row>
                        <Form.Label column sm="3">Enter a title for your post</Form.Label>
                        <Form.Check inline text="dark" type="checkbox" label="No title"/>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={7}>
                            <Form.Control
                                type="text"
                                onChange={e => this.onTextInputChange("eventTitle", e)}
                                value={eventTitle}
                                placeholder="Enter title"/>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Form.Label column sm="3">Enter a date for your post</Form.Label>
                        <Form.Check inline text="dark" type="checkbox" label="No date"/>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={7}>
                            <Form.Control
                                type="text"
                                onChange={e => this.onTextInputChange("eventDate", e)}
                                value={eventDate}
                                placeholder="Enter date"/>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Form.Label column sm="3">Enter a time for your post</Form.Label>
                        <Form.Check inline text="dark" type="checkbox" label="No time"/>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={7}>
                            <Form.Control
                                type="text"
                                onChange={e => this.onTextInputChange("eventTime", e)}
                                value={eventTime}
                                placeholder="Enter time"/>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Form.Label column sm="3">Enter a location for your post</Form.Label>
                        <Form.Check inline text="dark" type="checkbox" label="No location"/>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={7}>
                            <Form.Control
                                type="text"
                                onChange={e => this.onTextInputChange("eventLocation", e)}
                                value={eventLocation}
                                placeholder="Enter location"/>
                        </Col>
                    </Form.Row>
                </Form>
                <br/>
                <Button onClick={this.startUpload}>Upload</Button>
            </div>
        );
    }
}

export default UploadPage;
