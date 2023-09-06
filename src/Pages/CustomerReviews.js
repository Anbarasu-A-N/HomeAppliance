
// working
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import "./AdminHome.css";
import React, { Component } from "react";

class CustomerReviews extends Component {
  state = {
    data: [],
    originalData: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    axios
      .get("http://localhost:8081/reviews/showReviews")
      .then((response) => {
        this.setState({ data: response.data, originalData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {
    const { originalData, searchQuery } = this.state;

    if (searchQuery === "") {
      this.setState({ data: originalData });
    } else {
      const filteredData = originalData.filter((item) => {
        const searchRegex = new RegExp(searchQuery, "i");
        return (
          searchRegex.test(item.firstName) ||
          searchRegex.test(item.lastName) ||
          searchRegex.test(item.email)
        );
      });

      this.setState({ data: filteredData });
    }
  };

  handleClearSearch = () => {
    this.setState({ searchQuery: "", data: this.state.originalData });
  };

  render() {
    return (
      <>
      <AdminNavbar />
        <div className="adminhomecontainer">
          <h1>See All Customer's Review</h1>
          <center>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by First Name, Last Name or Email"
                id="adminhome"
                required
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              />
              &nbsp;&nbsp;
              <button type="button" id="adminhome" onClick={this.handleSearch}>
                Search
              </button>
              &nbsp;&nbsp;
              <button type="button" id="adminhome" onClick={this.handleClearSearch}>
                Clear
              </button>
              <br />
              <br />
            </div>
          </center>
          <div className="adminhome">
            <table className="scroll-table" border={1}>
              <thead>
                <tr id="adminhome">
                  <th id="adminhome">First Name:</th>
                  <th id="adminhome">Last Name:</th>
                  <th id="adminhome">Email:</th>
                  <th id="adminhome">Review:</th>
                  <th id="adminhome">Review Score:</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((review) => (
                  <tr key={review.reviewId}>
                    <td id="adminhome">{review.firstName}</td>
                    <td id="adminhome">{review.lastName}</td>
                    <td id="adminhome">{review.email}</td>
                    <td id="adminhome">{review.review}</td>
                    <td id="adminhome">{review.reviewScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerReviews;


/*

*/