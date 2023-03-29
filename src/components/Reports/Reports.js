import './Reports.css';
import { useState, useEffect } from 'react';
import { FaRegEye, FaSearch, FaRegWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export const Reports = () => {
    const [reports, setReports] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const deleteHandler = (id) => {
        fetch(`http://localhost:3333/api/reports/${id}`, {
          method: 'DELETE',
        })
        .then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            };
        });
        const newReports = reports.filter(report => report.id !== id);
        setReports(newReports);
        navigate('/reports');
    };

    useEffect(() => {
        fetch('http://localhost:3333/api/reports')
        .then(response => response.json())
        .then(data => setReports(data))
    }, [])

    const formatInterviewDate = (interviewDate) => {
        if (!interviewDate) return '';
        const doiDate = new Date(interviewDate);
        const doiDay = doiDate.getDate().toString().padStart(2, '0');
        const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
        const doiYear = doiDate.getFullYear();
        return (`${doiDay}.${doiMonth}.${doiYear}`);
    };      


    return (
        <>
            <nav>
                <div className="nav-wrapper">
                <span>Reports Administration</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><button>Reports</button></li>
                    <li><button>Create Report</button></li>
                </ul>
                </div>
            </nav>

            <div className="container">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
                            <label className="label-icon"><FaSearch className="icon"/></label>
                            <div className="divider"></div>
                        </div>
                    </form>
                </div>  
            </div>

            <div className="container reports-container">
                {reports && 
                    reports.map(report => (
                        <>
                            <div className="row" key={report.id}>
                                    <div className="col s2 m2 l3 xl3">
                                        <div>{report.companyName}</div>
                                        <div>Company name</div>
                                    </div>
                                <div className="col s2 m2 l3 xl3">
                                    <div>{report.candidateName}</div>
                                    <div>Candidate</div>
                                </div>
                            
                                <div className="col s2 m2 l3 xl3">
                                    <div>{formatInterviewDate(report.interviewDate)}</div>
                                    <div>Interview date</div>
                                </div>
                                <div className="col s2 m2 l1 xl1">
                                    <div>{report.status}</div>
                                    <div>Status</div>
                                </div>
                                <div className="col s2 m2 l1 xl1">
                                    <span><FaRegEye /></span>
                                    <span className="close-icon"><FaRegWindowClose onClick={() => deleteHandler(report.id)} /></span>
                                </div>
                            </div>
                        </>
                    ))
                }               
            </div>
        </>
    )
}