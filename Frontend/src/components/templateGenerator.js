import React, {useState, useRef} from 'react';
import ImageUploader from "../firebase/ImageUploader";
import {Button, Modal} from 'react-bootstrap';
import 'filepond/dist/filepond.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import domtoimage from 'dom-to-image-more'

//link - /CSE442-542/2019-Fall/cse-442i/template
export default function TemplateGenerator(){

    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(require('../components/testimages/uploadImagePlaceholder.png'))
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [isMemeGenerated, setIsMemeGenerated] = useState(false)

  let contentContainerRef = useRef(null)
  let resultContainerRef = useRef(null)

   function addText(e) {
    if(e.target.name === 'topText'){
      setTopText(e.target.value)
    }else{
      setBottomText(e.target.value)
    }
  }

  function uploadImage(event){
    setCurrentImage(URL.createObjectURL(event.target.files[0]))
  }

  function uploadToFirebse(){
    let sender = new ImageUploader()
  }

  function handlePosterGeneration() {
    if (resultContainerRef.current.childNodes.length > 0) {
      resultContainerRef.current.removeChild(resultContainerRef.current.childNodes[0])
    }

    domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
      const img = new Image()
      img.src = dataUrl
      resultContainerRef.current.appendChild(img)

      let sender = new ImageUploader(img)
      sender.sendImageToFirebaseStorage();
    })
}


    return(
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

          <label
          variant="primary"  >
              Upload
            <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} hidden/>
          </label>

          <button
          onClick={handlePosterGeneration}>
            Create post
          </button>

          <div className="editImageField" ref={contentContainerRef}>
            <h1 style={{position: 'relative', bottom: -90}}>{topText}</h1>

            <img
              style={{maxWidth: 600, paddingTop: 15}}
              src={currentImage}/>

              <h2 style={{position: 'relative', bottom: 60}}>{bottomText}</h2>

              <div ref={resultContainerRef}></div>

            </div>
      </div>
    )
  }
