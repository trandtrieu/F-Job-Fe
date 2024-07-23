import React from "react";

export default function NavbarRecruiter() {
  return (
    <>
      <div>
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
                <a href="/all-job">
                  <i className="la la-bell" />
                  All Jobs
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
      </div>
    </>
  );
}
