import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardColumns from "react-bootstrap/CardColumns";
import HomepageCard from "./homepageCard";
import * as Endpoint from "../constants/Endpoint";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardMetadatas: [],
      displayedCardMetadatas: [],
      page: this.props.page,
      searchValue: "",
      imageLinks: []
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
        this.setState({ cardMetadatas, displayedCardMetadatas: cardMetadatas });
      });
  }

  changeHandler = (key, value) => {
    this.setState({ [key]: value });
  };

  onSearchButtonClick = () => {
    try {
      fetch(process.env.REACT_APP_BACKEND_API + Endpoint.SEARCH_FOR_POSTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          search_value: this.state.searchValue,
          card_metadatas: this.state.cardMetadatas
        })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ displayedCardMetadatas: data });
        });
    } catch (error) {
      alert("Search failed.");
    }
  };

  render() {
    let cards = this.state.displayedCardMetadatas.map(metadata => (
      <HomepageCard {...metadata} />
    ));

    return (
      <div>
        <Form className="ml-2 mt-2 mb-2" inline>
          <FormControl
            type="text"
            onChange={e => this.changeHandler("searchValue", e.target.value)}
            placeholder="Search for posts"
            value={this.state.searchValue}
            className="mr-sm-2"
          />
          <Button onClick={this.onSearchButtonClick} variant="outline-primary">
            Search
          </Button>
        </Form>

        <CardColumns>{cards}</CardColumns>
      </div>
    );
  }
}
export default HomePage;
