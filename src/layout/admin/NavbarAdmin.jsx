import React from "react";

export default function NavbarAdmin() {
  return (
    <>
      <div>
        <div className="user-sidebar">
          <div className="sidebar-inner">
            <ul className="navigation">
              <li>
                <a href="#">
                </a>
              </li>
              <li>
                <a href="#">
                </a>
              </li>

              <li>
                <a href="/all-recruiter">
                  <i className="la la-file-invoice" />
                  Manager Recruiter
                </a>
              </li>

              <li>
                <a href="/all-candidate">
                  <i className="la la-file-invoice" />
                  Manager Candidates
                </a>
              </li>

              <li>
                <a href="/manage-job-list">
                  <i className="la la-briefcase" />
                  Manage Jobs
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
      </div>
    </>
  );
}
