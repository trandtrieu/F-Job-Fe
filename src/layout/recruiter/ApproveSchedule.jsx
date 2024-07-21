import React from 'react'

const ApproveCandidate = () => {
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
                            {/* <li className="active"><a href="dashboard.html"> <i className="la la-home" /> Dashboard</a></li> */}
                            <li><a href="dashboard-company-profile.html"><i className="la la-user-tie" />Company Profile</a></li>
                            {/* <li><a href="dashboard-post-job.html"><i className="la la-paper-plane" />Post a New Job</a></li> */}
                            <li><a href="dashboard-manage-job.html"><i className="la la-briefcase" /> Manage Jobs </a></li>
                            <li><a href="/dashboard-applicant"><i className="la la-file-invoice" /> All Applicants</a></li>
                            {/* <li><a href="dashboard-resumes.html"><i className="la la-bookmark-o" />Shortlisted Resumes</a></li> */}
                            {/* <li><a href="dashboard-packages.html"><i className="la la-box" />Packages</a></li> */}
                            {/* <li><a href="dashboard-messages.html"><i className="la la-comment-o" />Messages</a></li> */}
                            {/* <li><a href="dashboard-resume-alerts.html"><i className="la la-bell" />Resume Alerts</a></li> */}
                            <li><a href="dashboard-change-password.html"><i className="la la-lock" />Change Password</a></li>
                            <li><a href="dashboard-company-profile.html"><i className="la la-user-alt" />View Profile</a></li>
                            <li><a href="index.html"><i className="la la-sign-out" />Logout</a></li>
                            <li><a href="index.html"><i className="la la-trash" />Delete Profile</a></li>
                        </ul>
                    </div>
                </div>
                {/* End User Sidebar */}

                {/* Dashboard */}
                <section className="user-dashboard">
                    <div className="dashboard-outer">
                        <div className="upper-title-box">
                            <h3>Approve Schedule</h3>
                            {/* <div className="text">Ready to jump back in?</div> */}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Ls widget */}
                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            {/* <h4>My Profile</h4> */}
                                        </div>

                                        <div className="widget-content">
                                            <form className="default-form">
                                                <div className="row">
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Full name</label>
                                                        <input type="text" name="name" placeholder="Tran Mai" />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Email address</label>
                                                        <input type="text" name="name" placeholder="abc@gmail.com" />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Phone</label>
                                                        <input type="text" name="name" placeholder="+84..." />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Job</label>
                                                        <input type="text" name="name" placeholder="Full Stack Dev" />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Date</label>
                                                        <input type="text" name="name" placeholder="12.06.2024" />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Time</label>
                                                        <select className="chosen-select">
                                                            <option>8h - 9h</option>
                                                            <option>9h - 10h</option>
                                                            <option>10h - 11h</option>
                                                            <option>14h - 15h</option>
                                                            <option>15h - 16h</option>
                                                        </select>
                                                    </div>
                                                    {/* Search Select */}
                                                    {/* <div className="form-group col-lg-6 col-md-12">
                                                        <label>Multiple Select boxes </label>
                                                        <select data-placeholder="Categories" className="chosen-select multiple" multiple tabIndex={4}>
                                                            <option value="Banking">Banking</option>
                                                            <option value="Digital&Creative">Digital &amp; Creative</option>
                                                            <option value="Retail">Retail</option>
                                                            <option value="Human Resources">Human Resources</option>
                                                            <option value="Management">Management</option>
                                                        </select>
                                                    </div> */}
                                                    {/* Input */}
                                                    {/* <div className="form-group col-lg-6 col-md-12">
                                                        <label>Allow In Search &amp; Listing</label>
                                                        <select className="chosen-select">
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div> */}
                                                    {/* About Company */}
                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <label>Description/Note</label>
                                                        <textarea placeholder="Xin chào, 
                                                        Chúc mừng bạn đã được nhận CVs...
                                                        Lịch hẹn phỏng vấn ..." defaultValue={""} />
                                                    </div>
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <button className="theme-btn btn-style-one">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Ls widget */}
                            
                                {/* Ls widget */}

                            </div>
                        </div>
                    </div>
                </section>

                {/* End Dashboard */}

            </div>{/* End Page Wrapper */}
            {/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
            {/* Mirrored from creativelayers.net/themes/superio/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 24 May 2024 06:19:52 GMT */}
        </div>
    )
}

export default ApproveCandidate