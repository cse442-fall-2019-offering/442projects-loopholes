import React from "react";
import ImageUploader from "../firebase/ImageUploader";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

  startUpload = () => {
    const { eventTitle, eventDate, eventTime, eventLocation } = this.state;
    let sender = new ImageUploader(
      this._imgToUpload,
      this._nameToUpload,
      eventTitle,
      eventDate,
      eventTime,
      eventLocation
    );
    sender.sendImageToFirebaseStorage();
  };

  onTextInputChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { eventTitle, eventDate, eventTime, eventLocation } = this.state;
    return (
      <div className={"page_content"}>
        <h1> Upload a File to Make a Post </h1>
        <input type="file" onChange={this.choseFileHandler} />
        <input
          type="text"
          onChange={e => this.onTextInputChange("eventTitle", e)}
          value={eventTitle}
          placeholder={"Event Title"}
        />
        <input
          type="text"
          onChange={e => this.onTextInputChange("eventDate", e)}
          value={eventDate}
          placeholder={"Event Date"}
        />
        <input
          type="text"
          onChange={e => this.onTextInputChange("eventTime", e)}
          value={eventTime}
          placeholder={"Event Time"}
        />
        <input
          type="text"
          onChange={e => this.onTextInputChange("eventLocation", e)}
          value={eventLocation}
          placeholder={"Event Location"}
        />
        <button onClick={this.startUpload}>Upload</button>
      </div>
    );
  }
}

export default UploadPage;
