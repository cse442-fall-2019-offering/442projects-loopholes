import React, {useState, useRef} from 'react';
import {Button, Modal} from 'react-bootstrap';

//link - /CSE442-542/2019-Fall/cse-442i/template
class TemplateGenerator extends React.Component{

  constructor(props){
    super(props);
    this.state{
      image: this.props.image
      currentImage: this.props.currentImage
      topText: this.props.topText
      bottomText: this.props.bottomText
      imageGenerated: this.props.imageGenerated
    }
  }

  let contentContainerRef = useRef(null)
  let resultContainerRef = useRef(null)

  function addText(e){
    if(e.target.name === 'topText'){
      setTopText(e.target.value)
    }else{
      setBottomText(e.target.value)
    }
  }

  function uploadImage(){
    setCurrentImage(window.URL.createObjectUrl(e.target.files[0]))
  }

  function generateImage(){

  }

  render(){
    return(
      <div>


      </div>
    )
  }
}

export default TemplateGenerator;
