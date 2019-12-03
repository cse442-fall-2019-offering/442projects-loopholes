import React, { Component, useState, useRef } from "react";
import ImageUploader from "../firebase/ImageUploader";
import { Button, Modal } from "react-bootstrap";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import domtoimage from "dom-to-image-more";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//link - /CSE442-542/2019-Fall/cse-442i/template
export default function TemplateGenerator() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    require("../components/testimages/uploadImagePlaceholder.png")
  );
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isMemeGenerated, setIsMemeGenerated] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [validated, setValidated] = useState(false);

  let contentContainerRef = useRef(null);

  function addText(e) {
    if (e.target.name === "topText") {
      setTopText(e.target.value);
    } else {
      setBottomText(e.target.value);
    }
  }

  function uploadImage(event) {
    setCurrentImage(URL.createObjectURL(event.target.files[0]));
  }

  function uploadToFirebse() {
    let sender = new ImageUploader();
  }

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

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
      handlePosterGeneration();
    }
  };

  function handlePosterGeneration() {
    domtoimage.toPng(contentContainerRef.current).then(dataUrl => {
      let td = new Date();
      let yr = td.getFullYear();
      let mon = String(td.getMonth() + 1).padStart(2, "0");
      let day = String(td.getDate()).padStart(2, "0");
      let hr = String(td.getHours());
      let min = String(td.getMinutes());
      let sec = String(td.getSeconds());
      let filename = yr + mon + day + hr + min + sec;
      let sender = new ImageUploader(
        dataURLtoFile(dataUrl, filename),
        filename,
        eventTitle,
        eventDate,
        eventTitle,
        eventLocation
      );
      sender.sendImageToFirebaseStorage();
    });
  }

  return (
    <div>
      <input
        name="topText"
        placeholder="Top Text"
        type="text"
        value={topText}
        onChange={addText}
      />

      <input
        name="bottomText"
        placeholder="Bottom Text"
        type="text"
        value={bottomText}
        onChange={addText}
      />

      <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Title"
              value={eventTitle}
              onChange={e => setEventTitle(e.target.value)}
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
              onChange={e => setEventDate(e.target.value)}
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
              onChange={e => setEventTime(e.target.value)}
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
              onChange={e => setEventLocation(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a location.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Upload</Button>
      </Form>

      <button onClick={handlePosterGeneration}>Create post</button>

      <div className="editImageField" ref={contentContainerRef}>
        <h1 style={{ position: "relative", bottom: -90 }}>{topText}</h1>

        <img style={{ maxWidth: 600, paddingTop: 15 }} src={currentImage} />

        <h2 style={{ position: "relative", bottom: 60 }}>{bottomText}</h2>
      </div>
    </div>
  );
}
