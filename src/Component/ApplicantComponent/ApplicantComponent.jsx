import React from 'react'
import { useHistory } from 'react-router-dom';
const ApplicantComponent = ({ application }) => {
    const history = useHistory();

    const handleApproveClick = () => {
        history.push({
            pathname: '/approve-schedule',
            state: { email: application.email }
        });
    };

    return (
        <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
                <div className="content">
                    <figure className="image"><img src="/assets/images/resource/" alt="noData" /></figure>
                    <h4 className="name"><a href="#">{application.fullName}</a></h4>
                    <ul className="candidate-info">
                        <li className="designation">{application.email}</li>
                        <li><span className="icon flaticon-map-locator" /> {application.phone}</li>
                    </ul>
                    <ul className="post-tags">
                        <li><a href="#">Reacjs</a></li>
                        <li><a href="#">Nodejs</a></li>
                        <li><a href="#">Java</a></li>
                    </ul>
                </div>
                <div className="option-box">
                    <ul className="option-list">
                        <li>
                            <button onClick={handleApproveClick} data-text="Approve Application">
                                <span className="la la-check" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApplicantComponent