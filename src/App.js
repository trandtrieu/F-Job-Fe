import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./layout/Banner";
import Login from "./layout/Login";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Register from "./layout/Register";
import ProfileCandidate from "./layout/ProfileCandidate";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfileCandidate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
