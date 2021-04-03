import Header from "./components/sections/Header/Header";
// import NavTabs from "./components/NavTabs/NavTabs";
import Search from "./components/sections/Search/Search";
import Contact from "./components/sections/Footer/Contact";
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="navbar">
        <Header />
        <HashLink className="searchLink" to="/#search">Search</HashLink>
        <HashLink className="contactLink" to="/#contact">Contact</HashLink>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
