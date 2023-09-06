
// working
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import "./AdminHome.css";
import React, { Component } from "react";

class AdminHome extends Component {
  state = {
    data: [],
    originalData: [],
    searchQuery: "",
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8080/showProducts")
      .then((response) => {
        this.setState({ data: response.data, originalData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          searchRegex.test(item.productId) ||
          searchRegex.test(item.productName) ||
          searchRegex.test(item.user.email)
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
          <h1>See All Product Request</h1>
          <center>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by Product ID, Name, or Email"
                id="adminhome"
                required
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              />&nbsp;&nbsp;
              <button type="button" id="adminhome" onClick={this.handleSearch}>
                Search
              </button>&nbsp;&nbsp;
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
                  <th id="adminhome">Product ID:</th>
                  <th id="adminhome">Product Name:</th>
                  <th id="adminhome">Product Model:</th>
                  <th id="adminhome">Product Model ID:</th>
                  <th id="adminhome">Product Year:</th>
                  <th id="adminhome">Email ID:</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((user) => (
                  <tr key={user.pid}>
                    <td id="adminhome">{user.productId}</td>
                    <td id="adminhome">{user.productName}</td>
                    <td id="adminhome">{user.productModel}</td>
                    <td id="adminhome">{user.productModelId}</td>
                    <td id="adminhome">{user.productYear}</td>
                    <td id="adminhome">{user.user.email}</td>
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

export default AdminHome;


