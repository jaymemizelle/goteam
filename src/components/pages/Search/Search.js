// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./search.css";

function Search() {
  // const [puppyState, setPuppyState] = useState({
  //   breedName: "",
  // });

  // const handleChange = (e) =>
  //   setPuppyState({ ...puppyState, breedName: e.target.value });

  
  return (
    <div>
      <Form.Group className="searchBox">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search for a Team Member!"
        />
        <Button
          className="searchBtn"
          variant="primary"
          type="submit"
        >
          Search
        </Button>
      </Form.Group>
    </div>
  );
}

export default Search;
