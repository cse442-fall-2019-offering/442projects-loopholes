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
        if (data) {
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
          this.setState({
            cardMetadatas,
            displayedCardMetadatas: cardMetadatas
          });
        } else {
          this.setState({ cardMetadatas: [], displayedCardMetadatas: [] });
        }
      });
  }

  changeHandler = (key, value) => {
    this.setState({ [key]: value });
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.searchForPosts();
    }
  };

  onSearchButtonClick = () => {
    this.searchForPosts();
  };

  searchForPosts = () => {
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

  sortByEventDate() {
    try {
      fetch(process.env.REACT_APP_BACKEND_API + Endpoint.SORT_POSTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sort_type: "eventDate"
        })
      });
    } catch (error) {
      alert("Sorting failed.");
    }
  }

  sortByUploadDate() {
    try {
      fetch(process.env.REACT_APP_BACKEND_API + Endpoint.SORT_POSTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sort_type: "uploadDate"
        })
      });
    } catch (error) {
      alert("Sorting failed.");
    }
  }

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
            onKeyDown={this._handleKeyDown}
            placeholder="Search for posts"
            value={this.state.searchValue}
            className="mr-sm-2"
          />
          <Button onClick={this.onSearchButtonClick} variant="outline-primary">
            Search
          </Button>
        </Form>
        <Form className="mb-2">
          <Button
            className="ml-2 mr-2"
            onClick={this.sortByEventDate}
            variant="outline-primary"
          >
            Sort By Event Date
          </Button>
          <Button onClick={this.sortByUploadDate} variant="outline-primary">
            Sort By Upload Date
          </Button>
        </Form>
        <CardColumns>{cards}</CardColumns>
      </div>
    );
  }
}
export default HomePage;
