import React from "react";
import ImageUploader from "../firebase/ImageUploader";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

class UploadPage extends React.Component {
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
    let sender = new ImageUploader(this._imgToUpload, this._nameToUpload);
    sender.sendImageToFirebaseStorage();
  };

  render() {
    return (
      <div className={"page_content"}>
        <h1> Upload a File to Make a Post </h1>
        <input type="file" onChange={this.choseFileHandler} />
        <button onClick={this.startUpload}>Upload</button>
      </div>
    );
  }
}

export default UploadPage;
