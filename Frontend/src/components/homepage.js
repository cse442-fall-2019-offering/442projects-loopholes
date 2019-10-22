import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HomepageCard from './homepageCard';
import * as Endpoint from '../constants/Endpoint';
import ImageUploader from '../firebase/ImageUploader';
import { getTimestampImageString } from '../util/helper-functions/timestamp';
import ZoomIn from './zoomin'

class homePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            message: "",
            imageLinks: []
        }
    }

    componentDidMount() {
      fetch(process.env.REACT_APP_BACKEND_API + Endpoint.GET_HOMEPAGE_IMAGE_METADATA)
      .then(res => res.json())
      .then(data => {
        let imageMetadata = [];
        for (let key in data) {
          imageMetadata.push(data[key]['image_link']);
        }
        this.setState({ imageLinks: imageMetadata });
      });
    }

    uploadFile = async (e) => {
      const uploader = new ImageUploader(e.target.files[0], `${getTimestampImageString()}.jpg`);
      await uploader.sendImageToFirebaseStorage();
    }

    render(){

      let images = this.state.imageLinks.map(link => <img src={link} />);
      let cards = this.state.imageLinks.map(link => <HomepageCard imageLink={link} />);

        return(
<div>
  {this.state.message}
<br></br>
<input type="file" onChange={this.uploadFile} accept="image/*"></input>
<CardColumns>
  {cards && <ZoomIn/>}
</CardColumns>
</div>
        );
    }
}
export default homePage;
