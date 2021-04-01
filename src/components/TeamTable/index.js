import React, { useState, useEffect } from "react";
import "./team.css";
// import getTeamMembers from "../utils/TeamAPI";
import { Table } from "react-bootstrap";

function TeamTable() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeamMembers(res.results);
      });
  }, []);
  console.log("team members: ", teamMembers);

  return (
    <>
    <h2 className="tableTitle">Team Members</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {teamMembers.map(({ picture, name, email }) => (
          <MemberRow picture={picture} name={name} email={email} />
        ))}
      </tbody>
    </Table>
    </>
  );
}

const MemberRow = ({ picture, name, email }) => {
  return (
    <tr>
      <td><img alt="team member" src={picture.thumbnail}/></td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
    </tr>
  );
};



export default TeamTable;
