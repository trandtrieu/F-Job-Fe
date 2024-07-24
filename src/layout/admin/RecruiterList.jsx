import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import NavbarAdmin from './NavbarAdmin';
import { Button } from 'antd';
const RecruiterList = () => {
    const [recruiters, setRecruiters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecruiters = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3005/recruiter/getAllRecruiter');
                setRecruiters(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecruiters();
    }, []);




    const handleDelete = async (recruiterId) => {
        try {
            await axios.delete(`http://localhost:3005/recruiter/deleteRecruiter/${recruiterId}`);
            setRecruiters(recruiters.filter((recruiter) => recruiter._id !== recruiterId));
        } catch (error) {
            console.error('Failed to delete recruiter', error);
            setError(error.message);
        }
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(recruiters);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Recruiters');
        XLSX.writeFile(wb, 'recruiters.xlsx');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div className="page-wrapper dashboard ">
                {/* Preloader */}
                {/* <div className="preloader" /> */}
                {/* Header Span */}
                <span className="header-span" />
                {/* Sidebar Backdrop */}
                <div className="sidebar-backdrop" />
                <NavbarAdmin />
                <section className="user-dashboard">
                    <div className="dashboard-outer">
                        <div className="upper-title-box">
                            <h3>Manage Recruiter</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                        </div>
                                        <div className="widget-content">
                                            <div className="table-outer">
                                                <table className="default-table manage-job-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Full Name</th>
                                                            <th>Email</th>
                                                            <th>City</th>
                                                            <th>Phone</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {recruiters.map((recruiter) => (
                                                            <tr key={recruiter._id}>
                                                                <td>{recruiter.fullName}</td>
                                                                <td>{recruiter.emailRecruiter}</td>
                                                                <td>{recruiter.city}</td>
                                                                <td>{recruiter.phone}</td>
                                                                <td>
                                                                    <button
                                                                        data-text="Delete Application"
                                                                        onClick={() => handleDelete(recruiter._id)}
                                                                        style={{marginLeft: "16px"}}
                                                                    >
                                                                        <span className="la la-trash" style={{fontSize: "30px"}}></span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginLeft: "58px", marginBottom: "80px" }}>
                    <Button onClick={exportToExcel}>Export to Excel</Button>
                </div>
            </div>
        </div>
    )
}

export default RecruiterList