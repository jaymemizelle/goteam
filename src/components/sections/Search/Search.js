import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./search.css";
import SearchBar from "./SearchBar"

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div id="search">
      <h2 className="searchTitle">Search</h2>
      <Form.Group className="searchBox">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <span>
          <Button className="searchBtn" variant="primary" type="submit">
            Search
          </Button>
        </span>
      </Form.Group>
    </div>
  );
}

export default Search;
