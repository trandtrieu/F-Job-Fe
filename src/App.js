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
import Profile from "./layout/Profile";
import JobFinder from "./layout/JobFinder";


import "react-tooltip/dist/react-tooltip.css";
import Design from "./layout/Design";
import demo from "./layout/demo";
import CVS from "./layout/CVS";
import JobPost from "./layout/JobPost";
import JobList from "./layout/JobList";

import ApproveCandidate from "./layout/recruiter/ApproveCandidate";

import ProfileCandidate from "./layout/ProfileCandidate";
import ChangePassword from "./layout/ChangePassword";
import ProfileCV from "./layout/ProfileCV";
import AllApplicant from "./layout/recruiter/AllApplicant";
import AllCandidate from "./layout/recruiter/AllCandidate";
import AllJob from "./layout/recruiter/AllJob";
import AllJobRecruiter from "./layout/recruiter/AllJobRecruiter";
import ManageJobList from "../src/layout/recruiter/ManageJobList";
import ProtectedRoute from "./utils/auth";
import Unauthorized from "./layout/Unauthorized";
import RecruiterRegistration from "./layout/recruiter/registerRecruiter";
import LoginRecruiter from "./layout/recruiter/loginRecruiter";
import UpdateJobPost from "./layout/recruiter/updateJobPost";
import JobDetails from "./layout/recruiter/viewJobDetails";
import RecruiterList from "./layout/admin/RecruiterList";
import DashboardAdmin from "./layout/admin/DashboardAdmin";
import DashboardStatictis from "./components/DashboardStatictis";
import DashboardRecruiter from "./layout/recruiter/DashboardRecruiter";
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
            <Route path="/job-finder" component={JobFinder} />
            <Route path="/job-list" component={JobList} />
            <Route path="/all-candidate" component={AllCandidate} />
            <ProtectedRoute
              path="/all-job"
              component={AllJob}
              allowedRoles={["recruiter", "admin"]}
            />

            <Route
              path="/all-job-recruiter/:jobId"
              component={AllJobRecruiter}
            />

            <Route path="/approve-schedule" component={ApproveCandidate} />
            <Route path="/job-list" component={JobList} />

            <ProtectedRoute
              path="/dashboard-recruiter"
              component={DashboardRecruiter}
              allowedRoles={["recruiter", "admin"]}
            />
            <ProtectedRoute
              path="/view-statistic"
              component={DashboardStatictis}
              allowedRoles={["recruiter", "admin"]}
            />
            <ProtectedRoute
              path="/job-post"
              component={JobPost}
              allowedRoles={["recruiter", "admin"]}
            />
            <ProtectedRoute
              path="/manage-job-list"
              component={ManageJobList}
              allowedRoles={["recruiter", "admin"]}
            />
            <ProtectedRoute
              path="/update-job/:jobId"
              component={UpdateJobPost}
              allowedRoles={["recruiter", "admin"]}
            />
            <ProtectedRoute
              path="/job-details/:jobId"
              component={JobDetails}
              allowedRoles={["recruiter", "admin"]}
            />

            <Route path="/login-recruiter" component={LoginRecruiter} />
            <Route path="/approve-schedule" component={ApproveCandidate} />
            <Route path="/manage-job-list" component={ManageJobList} />
            <Route path="/unauthorized" component={Unauthorized} />
            <Route
              path="/register-recruiter"
              component={RecruiterRegistration}
            />
            <Route path="/unauthorized" component={Unauthorized} />

            <Route path="/all-applicant" component={AllApplicant} />


            {/* Thinh */}
            <Route path="/all-recruiter" component={RecruiterList} />
            <Route path="/dashboard-admin" component={DashboardAdmin} />
            <ProtectedRoute
              path="/dashboard-admin"
              component={DashboardAdmin}
              allowedRoles={["admin"]}
            />



          </Switch>
        </Router>

        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
