import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./layout/Login";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Register from "./layout/Register";
import ForgotPassword from "./layout/ForgotPassword";
import ResetPassword from "./layout/ResetPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./utils/UserContext";

import demo from "./layout/demo";
import CVS from "./layout/CVS";
import ProfileCandidate from "./layout/ProfileCandidate";
import ProfileCV from "./layout/ProfileCV";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/profileCandidate/" component={ProfileCandidate} />
            <Route path="/myCv" component={ProfileCV} />

            <Route path="/cvs" component={CVS} />
            <Route path="/demo" component={demo} />

            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/reset_password/:id/:token"
              component={ResetPassword}
            />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
