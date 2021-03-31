import React from "react";
import "./team.css";
import getTeamMembers from "../utils/TeamAPI";
import { useState, useEffect } from "react";
import {Table} from "react-bootstrap";



function TeamTable() {
    const [teammembers, setTeamMembers] = useState([]);

    

    return (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
    );
  }
  
  export default TeamTable;