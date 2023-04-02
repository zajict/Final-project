import './ReportDetails.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaSortDown } from 'react-icons/fa';

export const ReportDetails = ({selectedCandidate, selectedCompany}) => {
    console.log(selectedCandidate, selectedCompany);
    const navigate = useNavigate();
    const [interviewDate, setInterviewDate] = useState();
    const [phase, setPhase] = useState();
    const [status, setStatus] = useState();
    const [note, setNote] = useState("");

    const createReportHandler = () => {
        fetch("http://localhost:3333/api/reports", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 100),
                candidateName: selectedCandidate.candidateName,
                companyName: selectedCompany.companyName,
                interviewDate,
                phase,
                status,
                note,
            }),
        })
        .then((response) => response.json())
        .then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            }
        })
        navigate('/reports');
    }

    return (
        <>
            <div className="container details-container">
                <div className="row">
                    <div className="col s12 m4 l4 xl4 date-container">
                        <label>Interview Date:</label>
                        <input
                            type="date"
                            value={interviewDate}
                            onChange={e => setInterviewDate(e.target.value)}
                        />
                    </div>
                    <div className="col s12 m4 l4 xl4 phase-container">
                        <label>Phase:</label>
                        <select value={phase} onChange={e => setPhase(e.target.value)}>
                            <option value="option1">CV</option>
                            <option value="option2">HR</option>
                            <option value="option3">Technical</option>
                            <option value="option3">Final</option>
                        </select>
                    </div>
                    <div className="col s12 m4 l4 xl4 status-container">
                        <label>Status:</label>
                        <select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="">Select</option>
                            <option value="option1">Passed</option>
                            <option value="option2">Declined</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <label>Notes:</label>
                        <textarea value={note} rows="7" cols="50" onChange={e => setNote(e.target.value)}></textarea>
                    </div>
                </div>

                <div className="container buttons-container">
                    <button className='waves-effect waves-light red btn' id='back' onClick={() => {navigate('/create-report/step2')}}>BACK</button>
                    <button className='waves-effect waves-light blue btn' id='submit' disabled={!interviewDate || !phase || !status || !note} onClick={() => createReportHandler()}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

