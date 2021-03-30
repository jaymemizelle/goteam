import React from "react";
import "./team.css";
import Card from "../Card/Card";
import teamMembers from "../../utils/TeamAPI";
import { useState, useEffect } from "react";



function TeamPane() {
    const [teamMemberState, setTeamMemberState] = useState({
        name: "",
        phone: "",
        address: "",
      });

    //   const handleClick = async (e) => {
    //     e.preventDefault();
    //     let team = await teamMembers();
        
    //   };

    return (
      <Card />
    );
  }
  
  export default TeamPane;