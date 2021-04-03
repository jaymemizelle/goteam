import Home from "./components/pages/Home/Home";
// import NavTabs from "./components/NavTabs/NavTabs";
import Search from "./components/pages/Search/Search";
import Contact from "./components/pages/Contact/Contact";
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <Router>
      <div>
        <HashLink to="/#search">Link to Hash Fragment</HashLink>
        <Home />
        <Search />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
