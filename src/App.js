
import './App.css';
import Home from "./components/pages/Home/Home";
import NavTabs from "./components/NavTabs/NavTabs";
import Search from "./components/pages/Search/Search";
import Contact from "./components/pages/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
