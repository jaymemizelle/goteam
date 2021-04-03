import React, { useState, useEffect } from "react";
import "./team.css";
import { Table } from "react-bootstrap";

function TeamTable({ searchTerm }) {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTeamMembers(res.results);
      });
  }, []);

  return (
    <>
      <h2 className="tableTitle">Team Members</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Timezone Offset</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers
            .filter(
              (e) => !searchTerm || e.name.first.indexOf(searchTerm) !== -1
            )
            .map(({ picture, name, email, location, timezone }, i) => (
              <MemberRow
                i={i}
                picture={picture}
                name={name}
                email={email}
                location={location}
                timezone={timezone}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}

const MemberRow = ({ i, picture, name, email, location, timezone }) => {
  return (
    <tr key={i}>
      <td>{i}</td>
      <td>
        <img alt="team member" src={picture.thumbnail} />
      </td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{email}</td>
      <td>{location.country}</td>
      <td>{location.timezone.offset}</td>
    </tr>
  );
};

export default TeamTable;
