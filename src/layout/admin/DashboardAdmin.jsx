import React from "react";
import NavbarAdmin from "./NavbarAdmin";

const DashboardAdmin = () => {
  return (
    <div>
      <div className="page-wrapper dashboard ">
        {/* <div className="preloader" /> */}
        <span className="header-span" />
        {/* Sidebar Backdrop */}
        <div className="sidebar-backdrop" />
        <NavbarAdmin />
      </div>
    </div>
  );
};

export default DashboardAdmin;
