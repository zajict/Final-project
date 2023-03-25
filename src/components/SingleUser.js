import './SingleUser.css';
import { useEffect, useState } from 'react';
import { FaEye, FaSortDown } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export const SingleUser = () => {
    const [user, setUser] = useState([]);
    const [reports, setReports] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/?id=${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [id]);

    if (!user) return null;

    const dob = user.birthday;
    const dobDate = new Date(dob);
    const dobDay = dobDate.getDate().toString().padStart(2, '0');
    const dobMonth = (dobDate.getMonth() + 1).toString().padStart(2, '0');
    const dobYear = dobDate.getFullYear();
    const formattedDob = `${dobDay}.${dobMonth}.${dobYear}`;

    useEffect(() => {
        fetch(`http://localhost:3333/api/reports?candidateId=${candidateId}`)
        .then(response => response.json())
        .then(data => setReports(data))
    }, [id]);

    const doi = reports.interviewDate;
    const doiDate = new Date(doi);
    const doiDay = doiDate.getDate().toString().padStart(2, '0');
    const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
    const doiYear = doiDate.getFullYear();
    const formattedDoi = `${doiDay}.${doiMonth}.${doiYear}`;

    return (
        <>
            <div className="row">
                <div className="col s3">{user.avatar}</div>
                <div className="col s9">
                    <div className="row">
                        <div className="name-container">
                            <p>Name:</p>
                            <div>{user.name}</div>
                        </div>
                        <div className="dob-container">
                            <p>Date of birth:</p>
                            <div>{formattedDob}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="email-container">
                            <p>Email:</p>
                            <div>{user.email}</div>
                        </div>
                        <div className="edu-container">
                            <p>Education:</p>
                            <div>{user.education}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <table className="responsive-table striped highlight">
                    <thead>
                        <tr>
                            <th><FaSortDown /> Company</th>
                            <th><FaSortDown /> Interview date</th>
                            <th><FaSortDown /> Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reports.map(report => (
                            <>
                                <tr>
                                    <td>{report.companyName}</td>
                                </tr>
                                <tr>
                                    <td>{formattedDoi}</td>
                                </tr>
                                <tr>
                                    <td>{report.status}</td>
                                    <td><FaEye onClick={() => modalHandler(report.candidateId)} /></td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}