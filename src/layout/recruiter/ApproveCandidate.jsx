import React, { useEffect, useState } from 'react'
import { sendApplicationMail } from '../../services/MailService';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavbarRecruiter from "./NavbarRecruiter";
import axios from 'axios';
const ApproveCandidate = () => {
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    const handleOnChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleOnChangeTime = (e) => {
        setTime(e.target.value)
    }

    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value)
    }


    useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email);
        } else {
            // Nếu không có email trong state, điều hướng người dùng trở lại trang trước
            history.push('/all-job');
        }
    }, [location, history]);


    useEffect(() => {
        if (location.state && location.state.status) {
            setStatus(location.state.status);
        } else {
            console.log("erro")
        }

    }, [location]);

    console.log("status", status)
    console.log("email", email)


    const handleSendMail = async (e) => {
        e.preventDefault();
        try {
            const mailData = { email, date, time, description };
            await sendApplicationMail(mailData);
            // Update status to "Approve"
            await axios.post('http://localhost:3005/job/update-applicant-status', {email, status: 'APPROVED'});

            alert('Email sent successfully');
            toast.success("Email sent successfully")
            history.push("/all-job")
        } catch (error) {
            alert('Failed to send email');
        }
    };


    console.log("time", date, time, description)
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
                <NavbarRecruiter />
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
                                            <form className="default-form" onSubmit={handleSendMail}>
                                                <div className="row">
                                                    {/* Input */}
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Date</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            value={date}
                                                            onChange={handleOnChangeDate}
                                                        />
                                                    </div>

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Time</label>
                                                        <select className="chosen-select" value={time} onChange={handleOnChangeTime}>
                                                            <option value="">Select Time</option>
                                                            <option value="8h - 9h">8h - 9h</option>
                                                            <option value="9h - 10h">9h - 10h</option>
                                                            <option value="10h - 11h">10h - 11h</option>
                                                            <option value="14h - 15h">14h - 15h</option>
                                                            <option value="15h - 16h">15h - 16h</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <label>Description/Note</label>
                                                        <textarea
                                                            placeholder="Xin chào, 
                                                        Chúc mừng bạn đã được nhận CVs...
                                                        Lịch hẹn phỏng vấn ..."
                                                            value={description}
                                                            onChange={handleOnChangeDescription}
                                                        />
                                                    </div>
                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <button className="theme-btn btn-style-one">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ApproveCandidate