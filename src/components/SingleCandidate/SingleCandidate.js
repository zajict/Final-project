import './SingleCandidate.css';
import { useEffect, useState } from 'react';
import { FaRegEye, FaSortDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';


export const SingleCandidate = () => {
    const [candidate, setCandidate] = useState({});
    const [reports, setReports] = useState([]);
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/?id=${id}`)
        .then(response => response.json())
        .then(data => setCandidate(data[0]))
    }, [id]);

    const dob = candidate.birthday;
    const dobDate = new Date(dob);
    const dobDay = dobDate.getDate().toString().padStart(2, '0');
    const dobMonth = (dobDate.getMonth() + 1).toString().padStart(2, '0');
    const dobYear = dobDate.getFullYear();
    const formattedDob = `${dobDay}.${dobMonth}.${dobYear}`;


    useEffect(() => {
        fetch(`http://localhost:3333/api/reports?candidateId=${id}`)
        .then(response => response.json())
        .then(data => setReports(data))
    }, [id])

    const formatInterviewDate = (interviewDate) => {
        if (!interviewDate) return '';
        const doiDate = new Date(interviewDate);
        const doiDay = doiDate.getDate().toString().padStart(2, '0');
        const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
        const doiYear = doiDate.getFullYear();
        return (`${doiDay}.${doiMonth}.${doiYear}`);
    };      

    return (
        <div className={`${openModal ? "modalUp" : "modalDown"}`}>  
            {candidate &&
                <div>
                    <div className="row">
                        <div className="info-container">
                            <div className="col s4 image-container"><img className="candidate-image" src={candidate.avatar} style={{width :"80%"}} alt="candidate-img"/></div>
                            <div className="col s4 specs-container">
                                <div className="row">
                                    <div className="name-container">
                                        <p className="subtitle">Name:</p>
                                        <div className="info">{candidate.name}</div>
                                    </div>
                                    <div className="email-container">
                                        <p className="subtitle">Email:</p>
                                        <div className="info">{candidate.email}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="row">
                                    <div className="dob-container">
                                        <p className="subtitle">Date of birth:</p>
                                        <div className="info">{formattedDob}</div>
                                    </div>
                                    <div className="edu-container">
                                        <p className="subtitle">Education:</p>
                                        <div className="info">{candidate.education}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="row">
                <table className="container responsive-table highlight striped table-container">
                    <thead>
                        <tr className="table-border">
                            <th className="table-heading"><FaSortDown /> Company</th>
                            <th className="table-heading"><FaSortDown /> Interview date</th>
                            <th className="table-heading"><FaSortDown /> Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reports.map(report => (
                            <>
                                <tr className="table-border" key={report.id}>
                                    <td>{report.companyName}</td>
                                    {<td>{formatInterviewDate(report.interviewDate)}</td>}
                                    <td>
                                        <td>{report.status}</td>
                                        <td><FaRegEye className="openModalBtn eye-icon" onClick={()=> {
                                            setOpenModal(true);
                                            }}/>
                                        </td>
                                    </td>
                                    {openModal && <Modal candidate={candidate} report={report} setOpenModal={setOpenModal}/>}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}