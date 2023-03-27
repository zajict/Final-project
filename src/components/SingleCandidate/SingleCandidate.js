import './SingleCandidate.css';
import { useEffect, useState } from 'react';
import { FaEye, FaSortDown } from 'react-icons/fa';
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

    const doi = reports.interviewDate;
    const doiDate = new Date(doi);
    const doiDay = doiDate.getDate().toString().padStart(2, '0');
    const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
    const doiYear = doiDate.getFullYear();
    const formattedDoi = `${doiDay}.${doiMonth}.${doiYear}`;

    return (
        <>  
            {candidate &&
                <div className={`${openModal ? "modalUp" : "modalDown"}`}>
                    <div className="row">
                        <div className="col s3" ><img src={candidate.avatar} style={{width :"80%"}} alt="candidate-img"/></div>
                        <div className="col s9">
                            <div className="row">
                                <div className="name-container">
                                    <p>Name:</p>
                                    <div>{candidate.name}</div>
                                </div>
                                <div className="dob-container">
                                    <p>Date of birth:</p>
                                    <div>{formattedDob}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="email-container">
                                    <p>Email:</p>
                                    <div>{candidate.email}</div>
                                </div>
                                <div className="edu-container">
                                    <p>Education:</p>
                                    <div>{candidate.education}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="row">
                <table className="responsive-table">
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
                                <tr key={report.id}>
                                    <td>{report.companyName}</td>
                                </tr>
                                <tr>
                                    <td>{formattedDoi}</td>
                                </tr>
                                <tr>
                                    <td>{report.status}</td>
                                    <td><FaEye className='openModalBtn' onClick={()=> {
                                        setOpenModal(true);
                                        }}/></td>
                                    {openModal && <Modal candidate={candidate} report={report} setOpenModal={setOpenModal}/>}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}