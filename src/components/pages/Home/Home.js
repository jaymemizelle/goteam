import React from "react";
import "./home.css";
import TeamTable from "../../TeamTable";
import Search from "../Search/Search"

function Home() {
  return (
    <>
      <div className="bg">
        <div className="layer"></div>
        <div className="headerText">
          <h1 className="goTeam">GoTeam</h1>
          <p>Build Connection. Organize Workflow. Optimize Team Management.</p>
          {/* <Button className="viewWorkBtn" variant="light">
            View My Work
          </Button> */}
        </div>
      </div>
      <div className="homeText">
        <h2 className="homeTitle">Welcome to GoTeam!</h2>
        <p className="instructions">
          View your teammates' non sensitive data in the table below and use the search bar to filter which teammates you'd like to see! Go ahead. Try searching by the first and last name of your teammate to see who comes up! Have fun and remember not to take life too seriously. It isn't permanent!
        </p>
        <Search/>
        <TeamTable/>
      </div>
    </>
  );
}

export default Home;
