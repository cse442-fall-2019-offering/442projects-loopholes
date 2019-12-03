import React, { useState, useRef } from "react";
import ImageUploader from "../firebase/ImageUploader";
import { Button, Modal } from "react-bootstrap";
import "filepond/dist/filepond.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import domtoimage from "dom-to-image-more";

//link - /CSE442-542/2019-Fall/cse-442i/template
export default function TemplateGenerator() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    require("../components/testimages/uploadImagePlaceholder.png")
  );
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isMemeGenerated, setIsMemeGenerated] = useState(false);

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
        filename
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

      <button onClick={handlePosterGeneration}>Create post</button>

      <div className="editImageField" ref={contentContainerRef}>
        <h1 style={{ position: "relative", bottom: -90 }}>{topText}</h1>

        <img style={{ maxWidth: 600, paddingTop: 15 }} src={currentImage} />

        <h2 style={{ position: "relative", bottom: 60 }}>{bottomText}</h2>
      </div>
    </div>
  );
}
