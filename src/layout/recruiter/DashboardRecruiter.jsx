import React from 'react'

const DashboardRecruiter = () => {
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
                            <li><a href="/all-applicant"><i className="la la-file-invoice" /> All Applicants</a></li>
                            <li><a href="/all-candidate"><i className="la la-bell" />All Candidates</a></li>
                            <li><a href="index.html"><i className="la la-sign-out" />Logout</a></li>
                        </ul>
                    </div>
                </div>
                {/* End User Sidebar */}

                {/* Dashboard */}
                <section className="user-dashboard">
                    <div className="dashboard-outer">
                    </div>
                </section>
                <div className="copyright-text">
                    <p>© 2024 F-JOB. All Right Reserved.</p>
                </div>
            </div>{/* End Page Wrapper */}
            {/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
            {/* Mirrored from creativelayers.net/themes/superio/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 24 May 2024 06:19:52 GMT */}
        </div>
    )
}

export default DashboardRecruiter