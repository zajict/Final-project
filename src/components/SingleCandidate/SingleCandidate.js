import './SingleCandidate.css';
import { useEffect, useState } from 'react';
import { FaRegEye, FaSortDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
// import { useNavigate } from 'react-router';


export const SingleCandidate = () => {
    const [candidate, setCandidate] = useState({});
    const [reports, setReports] = useState([]);
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    // const navigate = useNavigate();

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
        <div className={`${openModal ? "modalUp" : "modalDown"}`} id='single-page-content'>  
            {candidate &&
                <div className={`${openModal ? "modalUp" : "modalDown"}`}>
                    <div className="container info-container">
                        <div className="row">
                            <div className="col s12 m6 l4 xl4 image-container"><img className="responsive-img candidate-image" src={candidate.avatar} style={{width :"80%"}} alt="candidate-img"/></div>
                            <div className="col s12 m6 l4 xl4 specs-container">
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
                            <div className="col s12 m6 l4 xl4">
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
                <table className="container responsive-table highlight striped bordered table-container">
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
                                    {<td className="doi">{formatInterviewDate(report.interviewDate)}</td>}
                                    <td>
                                        <table>
                                            <tr>
                                                <td>{report.status}</td>
                                                <td><FaRegEye className="openModalBtn eye-icon" onClick={()=> {
                                                    setOpenModal(true);
                                                    }}/>
                                                </td>
                                            </tr>
                                        </table>
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