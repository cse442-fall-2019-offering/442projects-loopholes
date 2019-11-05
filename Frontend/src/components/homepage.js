import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardColumns from "react-bootstrap/CardColumns";
import HomepageCard from "./homepageCard";
import * as Endpoint from "../constants/Endpoint";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      cardMetadatas: []
    };
  }

  componentDidMount() {
    fetch(
      process.env.REACT_APP_BACKEND_API + Endpoint.GET_HOMEPAGE_IMAGE_METADATA
    )
      .then(res => res.json())
      .then(data => {
        let cardMetadatas = Object.values(data).map(datum => {
          const { event_info, image_link } = datum;
          if (event_info) {
            let { title, date, time, location } = event_info;
            return {
              imageLink: image_link,
              eventTitle: title,
              eventDate: date,
              eventTime: time,
              eventLocation: location
            };
          }
          return {
            imageLink: image_link
          };
        });
        this.setState({ cardMetadatas });
      });
  }

  render() {
    let cards = this.state.cardMetadatas.map(metadata => (
      <HomepageCard {...metadata} />
    ));

    return (
      <div id={"home_page"}>
        <CardColumns>{cards}</CardColumns>
      </div>
    );
  }
}
export default HomePage;
