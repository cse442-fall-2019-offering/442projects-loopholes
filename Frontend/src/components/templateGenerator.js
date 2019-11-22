import React, {useState, useRef} from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'filepond/dist/filepond.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//link - /CSE442-542/2019-Fall/cse-442i/template
export default function TemplateGenerator(){

    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(require('../components/testimages/uploadImagePlaceholder.png'))
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [isMemeGenerated, setIsMemeGenerated] = useState(false)

   function addText(e) {
    if(e.target.name === 'topText'){
      setTopText(e.target.value)
    }else{
      setBottomText(e.target.value)
    }
  }

  function uploadImage(event){
  //  setCurrentImage(window.URL.createObjectURL(event.target.files[0]))
    setCurrentImage(URL.createObjectURL(event.target.files[0]))
//    setActiveImage(window.URL.createObjectURL(event.target.files[0]))
  }

    return(
      <div>
        <img src={currentImage}/>
        <label
        variant="primary"
        >
            Upload
          <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} hidden/>
        </label>

      </div>
    )
  }
