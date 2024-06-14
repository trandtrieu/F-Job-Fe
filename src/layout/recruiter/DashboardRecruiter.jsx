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
                            <h3>Howdy, Invision!</h3>
                            <div className="text">Ready to jump back in?</div>
                        </div>
                        <div className="row">
                            <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="ui-item">
                                    <div className="left">
                                        <i className="icon flaticon-briefcase" />
                                    </div>
                                    <div className="right">
                                        <h4>22</h4>
                                        <p>Posted Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="ui-item ui-red">
                                    <div className="left">
                                        <i className="icon la la-file-invoice" />
                                    </div>
                                    <div className="right">
                                        <h4>9382</h4>
                                        <p>Application</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="ui-item ui-yellow">
                                    <div className="left">
                                        <i className="icon la la-comment-o" />
                                    </div>
                                    <div className="right">
                                        <h4>74</h4>
                                        <p>Messages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="ui-item ui-green">
                                    <div className="left">
                                        <i className="icon la la-bookmark-o" />
                                    </div>
                                    <div className="right">
                                        <h4>32</h4>
                                        <p>Shortlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                {/* Graph widget */}
                                <div className="graph-widget ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Your Profile Views</h4>
                                            <div className="chosen-outer">
                                                {/*Tabs Box*/}
                                                <select className="chosen-select">
                                                    <option>Last 6 Months</option>
                                                    <option>Last 12 Months</option>
                                                    <option>Last 16 Months</option>
                                                    <option>Last 24 Months</option>
                                                    <option>Last 5 year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="widget-content">
                                            <canvas id="chart" width={100} height={45} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-12">
                                {/* Notification Widget */}
                                <div className="notification-widget ls-widget">
                                    <div className="widget-title">
                                        <h4>Notifications</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="notification-list">
                                            <li><span className="icon flaticon-briefcase" /> <strong>Wade Warren</strong> applied for a job <span className="colored">Web Developer</span></li>
                                            <li><span className="icon flaticon-briefcase" /> <strong>Henry Wilson</strong> applied for a job <span className="colored">Senior Product Designer</span></li>
                                            <li className="success"><span className="icon flaticon-briefcase" /> <strong>Raul Costa</strong> applied for a job <span className="colored">Product Manager, Risk</span></li>
                                            <li><span className="icon flaticon-briefcase" /> <strong>Jack Milk</strong> applied for a job <span className="colored">Technical Architect</span></li>
                                            <li className="success"><span className="icon flaticon-briefcase" /> <strong>Michel Arian</strong> applied for a job <span className="colored">Software Engineer</span></li>
                                            <li><span className="icon flaticon-briefcase" /> <strong>Ali Tufan</strong> applied for a job <span className="colored">UI Designer</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                {/* applicants Widget */}
                                <div className="applicants-widget ls-widget">
                                    <div className="widget-title">
                                        <h4>Recent Applicants</h4>
                                    </div>
                                    <div className="widget-content">
                                        <div className="row">
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-1.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Darlene Robertson</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-2.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Wade Warren</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-3.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-1.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Darlene Robertson</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-2.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Wade Warren</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Candidate block three */}
                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <figure className="image"><img src="images/resource/candidate-3.png" alt="" /></figure>
                                                        <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                                                        <ul className="candidate-info">
                                                            <li className="designation">UI Designer</li>
                                                            <li><span className="icon flaticon-map-locator" /> London, UK</li>
                                                            <li><span className="icon flaticon-money" /> $99 / hour</li>
                                                        </ul>
                                                        <ul className="post-tags">
                                                            <li><a href="#">App</a></li>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Digital</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="option-box">
                                                        <ul className="option-list">
                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                            <li><button data-text="Approve Aplication"><span className="la la-check" /></button></li>
                                                            <li><button data-text="Reject Aplication"><span className="la la-times-circle" /></button></li>
                                                            <li><button data-text="Delete Aplication"><span className="la la-trash" /></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Dashboard */}
                {/* Copyright */}
                <div className="copyright-text">
                    <p>© 2021 Superio. All Right Reserved.</p>
                </div>
            </div>{/* End Page Wrapper */}
            {/* Chart.js // documentation: http://www.chartjs.org/docs/latest/ */}
            {/* Mirrored from creativelayers.net/themes/superio/dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 24 May 2024 06:19:52 GMT */}
        </div>
    )
}

export default DashboardRecruiter