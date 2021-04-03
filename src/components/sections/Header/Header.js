import React, { useState } from "react";
import "./header.css";
import TeamTable from "../../TeamTable";
import Search from "../Search/Search"

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="bg">
        <div className="layer"></div>
        <div className="headerText">
          <h1 className="goTeam">GoTeam</h1>
          <p>Build Connection. Organize Workflow. Optimize Team Management.</p>
        </div>
      </div>
      <div className="homeText">
        <h2 className="homeTitle">Welcome to GoTeam!</h2>
        <p className="instructions">
          View your teammates' non sensitive data in the table below and use the search bar to filter which teammates you'd like to see! Go ahead. Try searching by the first name or last name of your teammates, or even search by their location to see who comes up! Have fun and remember not to take life too seriously. It isn't permanent!
        </p>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <TeamTable searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default Header;
