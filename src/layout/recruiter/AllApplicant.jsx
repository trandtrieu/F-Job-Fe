import React, { useEffect, useState } from 'react'
import ApplicantComponent from '../../Component/ApplicantComponent/ApplicantComponent'
import { getJobApplications } from '../../services/ApplicantServices';

const AllApplicant = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const jobId = '669e799db15d3afaf9b4b958'; // Chỗ này Th đag fix cứng để test

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const data = await getJobApplications(jobId);
                setApplications(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchApplications();
    }, [jobId]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    console.log("applications", applications)

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
                                        </div>
                                        {/* Content */}
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
                                                            {/* <ApplicantComponent /> */}
                                                            {applications.map((application) => (
                                                                <ApplicantComponent key={application._id} application={application} />
                                                            ))}
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

export default AllApplicant