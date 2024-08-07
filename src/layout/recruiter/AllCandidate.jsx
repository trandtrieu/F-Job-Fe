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
        <NavbarRecruiter />
        <CandidatesUser />
      </div>
    </div>
  );
};

export default AllCandidate;
