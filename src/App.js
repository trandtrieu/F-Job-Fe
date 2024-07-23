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
import LoginV2 from "./layout/LoginV2";
import { UserProvider } from "./utils/UserContext";
import Profile from "./layout/Profile";
import JobFinder from "./layout/JobFinder";
import DashboardRecruiter from "./components/DashboardRecruiter";

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
            <Route path="/profile" component={Profile} />

            <Route path="/login2" component={LoginV2} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/reset_password/:id/:token"
              component={ResetPassword}
            />
            <Route path="/job-finder" component={JobFinder} />
            <Route path="/view-statistic" component={DashboardRecruiter}/>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
