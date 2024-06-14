import React from 'react'

const DashboardApplicant = () => {
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
                <section className="user-dashboard">
                    <div className="dashboard-outer">
                        <div className="upper-title-box">
                            <h3>All Aplicants</h3>
                            <div className="text">Ready to jump back in?</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Ls widget */}
                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Applicant</h4>
                                            <div className="chosen-outer">
                                                {/*Tabs Box*/}
                                                <select className="chosen-select">
                                                    <option>Select Jobs</option>
                                                    <option>Last 12 Months</option>
                                                    <option>Last 16 Months</option>
                                                    <option>Last 24 Months</option>
                                                    <option>Last 5 year</option>
                                                </select>
                                                {/*Tabs Box*/}
                                                <select className="chosen-select">
                                                    <option>All Status</option>
                                                    <option>Last 12 Months</option>
                                                    <option>Last 16 Months</option>
                                                    <option>Last 24 Months</option>
                                                    <option>Last 5 year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="widget-content">
                                            <div className="tabs-box">
                                                <div className="aplicants-upper-bar">
                                                    <h6>Applycants IT</h6>
                                                    <ul className="aplicantion-status tab-buttons clearfix">
                                                        <li className="tab-btn active-btn totals" data-tab="#totals">Total(s): 4</li>
                                                        <li className="tab-btn approved" data-tab="#approved">Approved: 0</li>
                                                        <li className="tab-btn rejected" data-tab="#rejected">Rejected(s): 0</li>
                                                    </ul>
                                                </div>
                                                <div className="tabs-content">
                                                    {/*Tab*/}
                                                    <div className="tab active-tab" id="totals">
                                                        <div className="row">
                                                            {/* Candidate block three */}
                                                            <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
                                                                <div className="inner-box">
                                                                    <div className="content">
                                                                        <figure className="image"><img src="/assets/images/resource/c1.png" alt="" /></figure>
                                                                        <h4 className="name"><a href="#">Tran Mai</a></h4>
                                                                        <ul className="candidate-info">
                                                                            <li className="designation">Full Stack Dev</li>
                                                                            <li><span className="icon flaticon-map-locator" /> Da Nang</li>
                                                                            {/* <li><span className="icon flaticon-money" /> $99 / month</li> */}
                                                                        </ul>
                                                                        <ul className="post-tags">
                                                                            <li><a href="#">Reacjs</a></li>
                                                                            <li><a href="#">Nodejs</a></li>
                                                                            <li><a href="#">Java</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="option-box">
                                                                        <ul className="option-list">
                                                                            <li><button data-text="View Aplication"><span className="la la-eye" /></button></li>
                                                                            <li>
                                                                                <a href="/approve-schedule">
                                                                                <button data-text="Approve Aplication">
                                                                                    <span className="la la-check" />
                                                                                </button>
                                                                                </a>
                                                                            </li>
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
                                                                        <figure className="image"><img src="/assets/images/resource/c2.png" alt="" /></figure>
                                                                        <h4 className="name"><a href="#">Hai Nam</a></h4>
                                                                        <ul className="candidate-info">
                                                                            <li className="designation">QA QC/Tester</li>
                                                                            <li><span className="icon flaticon-map-locator" /> Hue, Viet Nam</li>
                                                                            {/* <li><span className="icon flaticon-money" /> $99 / hour</li> */}
                                                                        </ul>
                                                                        <ul className="post-tags">
                                                                            <li><a href="#">.Net</a></li>
                                                                            <li><a href="#">PHP</a></li>
                                                                            <li><a href="#">C#</a></li>
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
                                                                        <figure className="image"><img src="/assets/images/resource/c3.png" alt="" /></figure>
                                                                        <h4 className="name"><a href="#">Dinh Trieu</a></h4>
                                                                        <ul className="candidate-info">
                                                                            <li className="designation">BrSE</li>
                                                                            <li><span className="icon flaticon-map-locator" /> Quang Nam, Viet Nam</li>
                                                                            {/* <li><span className="icon flaticon-money" /> $99 / hour</li> */}
                                                                        </ul>
                                                                        <ul className="post-tags">
                                                                            <li><a href="#">BA</a></li>
                                                                            <li><a href="#">Japanese</a></li>
                                                                            <li><a href="#">Bride Engineer</a></li>
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
                                                                        <figure className="image"><img src="/assets/images/resource/applicant-1.png" alt="" /></figure>
                                                                        <h4 className="name"><a href="#">Nhat Linh</a></h4>
                                                                        <ul className="candidate-info">
                                                                            <li className="designation">Project Manager</li>
                                                                            <li><span className="icon flaticon-map-locator" /> Quang Nam, Viet Nam</li>
                                                                            {/* <li><span className="icon flaticon-money" /> $99 / hour</li> */}
                                                                        </ul>
                                                                        <ul className="post-tags">
                                                                            <li><a href="#"></a>Water Fall</li>
                                                                            <li><a href="#">Scrum</a></li>
                                                                            <li><a href="#">Agile</a></li>
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
                                                    {/*Tab*/}
                                                    <div className="tab" id="approved">
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
                                                        </div>
                                                    </div>
                                                    {/*Tab*/}
                                                    <div className="tab" id="rejected">
                                                        <div className="row">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>{/* End Page Wrapper */}
        </div>

    )
}

export default DashboardApplicant