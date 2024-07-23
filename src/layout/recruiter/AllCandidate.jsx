import React from "react";
import CandidatesUser from "../../Component/CandidatesUser/CandidatesUser";
import NavbarRecruiter from "./NavbarRecruiter";

const AllCandidate = () => {
    return (
        <div>
            <div className="page-wrapper dashboard ">
                {/* Preloader */}
                {/* <div className="preloader" /> */}
                {/* Header Span */}
                <span className="header-span" />
                {/* Sidebar Backdrop */}
                <div className="sidebar-backdrop" />

        {/* User Sidebar */}
        <NavbarRecruiter/>
        {/* End User Sidebar */}
        <CandidatesUser />
      </div>
      {/* End Page Wrapper */}
    </div>
  );
};

export default AllCandidate;
