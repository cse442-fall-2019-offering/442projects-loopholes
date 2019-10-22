import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HomepageCard from './homepageCard';
import * as Endpoint from '../constants/Endpoint';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            imageLinks: []
        }
    }

    componentDidMount() {
      fetch(process.env.REACT_APP_BACKEND_API + Endpoint.GET_HOMEPAGE_IMAGE_METADATA)
      .then(res => res.json())
      .then(data => {
        let imageMetadata = Object.values(data).map(datum => datum['image_link']);
        this.setState({ imageLinks: imageMetadata });
      });
    }

    render(){

      let cards = this.state.imageLinks.map(link => <HomepageCard imageLink={link} />);

        return(
<div>
  <CardColumns>
    {cards}
  </CardColumns>
</div>
        );
    }
}
export default HomePage;
