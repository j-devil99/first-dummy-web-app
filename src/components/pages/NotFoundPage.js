import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NotFound extends Component {
  render() {
    return (
      <ComponenetNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <hi>Ops!</hi>
              <h2>Error 404 Not Found</h2>
              <div className="error-details">
                Sorry,an error occurred,The requested page was not found!
              </div>
              <div className="error-details">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-home" />
                  &nbsp;Back to Main
                </Link>
                <Link className="btn btn-outline-secondary btn-lg">
                  <i className="fas fa-envelope" />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponenetNotFound>
    );
  }
}
export default NotFound;

const ComponenetNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }
  error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .btn {
    margin-right: 10px;
  }
`;
