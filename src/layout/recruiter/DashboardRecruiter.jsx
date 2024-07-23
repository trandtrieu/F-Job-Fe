import React from "react";
import NavbarRecruiter from "./NavbarRecruiter";

const DashboardRecruiter = () => {
  return (
    <div>
      <div className="page-wrapper dashboard ">
        <div className="preloader" />
        <span className="header-span" />
        {/* Sidebar Backdrop */}
        <div className="sidebar-backdrop" />
        <NavbarRecruiter />
      </div>
    </div>
  );
};

export default DashboardRecruiter;
