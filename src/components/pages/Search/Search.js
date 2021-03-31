// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./search.css";

function Search() {

  
  return (
    <div id="search">
      <h2 style={{textAlign: "center"}}>Search</h2>
      <Form.Group className="searchBox">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search for a Team Member!"
        />
        <span><Button
          className="searchBtn"
          variant="primary"
          type="submit"
        >
          Search
        </Button></span>
      </Form.Group>
    </div>
  );
}

export default Search;
