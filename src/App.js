import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./layout/Banner";
import Login from "./layout/Login";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Register from "./layout/Register";
import JobPostingForm from "./layout/JobPost";
import JobList from "./layout/JobList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/job-post" component={JobPostingForm} />
          <Route path="/job-list" component={JobList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
