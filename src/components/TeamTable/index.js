import React, { useState, useEffect } from "react";
import "./team.css";
// import getTeamMembers from "../utils/TeamAPI";
import { Table } from "react-bootstrap";

function TeamTable() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeamMembers(res.results);
      });
  }, []);
  console.log("team members: ", teamMembers);

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
        {teamMembers.map(({ name, email }) => (
          <EmployeeRow name={name} email={email} />
        ))}
      </tbody>
    </Table>
  );
}

const EmployeeRow = ({ name, email }) => {
  return (
    <tr>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
    </tr>
  );
};

export default TeamTable;
