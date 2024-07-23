import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./layout/Login";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Register from "./layout/Register";
import ForgotPassword from "./layout/ForgotPassword";
import ResetPassword from "./layout/ResetPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./utils/UserContext";
import "react-tooltip/dist/react-tooltip.css";

import demo from "./layout/demo";
import CVS from "./layout/CVS";
import JobPost from "./layout/JobPost";
import JobList from "./layout/JobList";
import DashboardRecruiter from "./layout/recruiter/DashboardRecruiter";
import ApproveSchedule from "./layout/recruiter/ApproveSchedule";
import ManageJobList from "./layout/admin/ManageJobList";
import ProfileCandidate from "./layout/ProfileCandidate";
import ChangePassword from "./layout/ChangePassword";

import ProfileCV from "./layout/ProfileCV";

import ProtectedRoute from "./utils/auth";
import Unauthorized from "./layout/Unauthorized";
import RecruiterRegistration from "./layout/recruiter/registerRecruiter";
import AllApplicant from "./layout/recruiter/AllApplicant";
import AllCandidate from "./layout/recruiter/AllCandidate";

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

            <Route path="/changePassword" component={ChangePassword} />
            <Route path="/myCv" component={ProfileCV} />

            <Route path="/cvs" component={CVS} />
            <Route path="/demo" component={demo} />

            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/reset_password/:id/:token"
              component={ResetPassword}
            />
            <Route path="/job-list" component={JobList} />
            <Route path="/job-post" component={JobPost} />
            <Route path="/dashboard-recruiter" component={DashboardRecruiter} />
            <Route path="/all-applicant" component={AllApplicant} />
            <Route path="/all-candidate" component={AllCandidate} />
            <Route path="/approve-schedule" component={ApproveSchedule} />
            <Route path="/manage-job-list" component={ManageJobList} />
            <Route path="/unauthorized" component={Unauthorized} />
            <Route
              path="/register-recruiter"
              component={RecruiterRegistration}
            />
          </Switch>
        </Router>

        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
