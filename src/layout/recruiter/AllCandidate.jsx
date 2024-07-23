import React from "react";
import CandidatesUser from "../../Component/CandidatesUser/CandidatesUser";

const AllCandidate = () => {
  return (
    <div>
      <div className="page-wrapper dashboard ">
        {/* Preloader */}
        <div className="preloader" />
        {/* Header Span */}
        <span className="header-span" />
        {/* Sidebar Backdrop */}
        <div className="sidebar-backdrop" />

        {/* User Sidebar */}
        <div className="user-sidebar">
          <div className="sidebar-inner">
            <ul className="navigation">
              <li>
                <a href="/all-applicant">
                  <i className="la la-file-invoice" /> All Applicants
                </a>
              </li>
              <li>
                <a href="/all-candidate">
                  <i className="la la-bell" />
                  All Candidates
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="la la-sign-out" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End User Sidebar */}
        <CandidatesUser />
      </div>
      {/* End Page Wrapper */}
    </div>
  );
};

export default AllCandidate;
