import './ReportDetails.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const ReportDetails = ({selectedCandidate, selectedCompany, setActiveStep}) => {
    const navigate = useNavigate();
    const [interviewDate, setInterviewDate] = useState("");
    const [phase, setPhase] = useState("");
    const [status, setStatus] = useState("");
    const [note, setNote] = useState("");
    const [validDate, setValidDate] = useState(true);

    const createReportHandler = () => {
        fetch("http://localhost:3333/api/reports", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 100),
                candidateName: selectedCandidate,
                companyName: selectedCompany,
                interviewDate,
                phase,
                status,
                note,
            }),
        })
        .then((response) => response.json())
        .then(res => {
            navigate('/reports');
        }) 
    };

    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();
        if (selectedDate > currentDate) {
            setValidDate(false);
        } else {
            setValidDate(true);
            setInterviewDate(event.target.value);
        }
    };

    return (
        <>
            <div className="container details-container">
                <div className="row">
                    <div className="col s12 m4 l4 xl4 date-container">
                        <label>Interview Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={interviewDate}
                            onChange={handleDateChange}
                        />
                        {!validDate && (
                            <p className="invalid-input">Date cannot be in the future</p>
                        )}
                    </div>
                    <div className="col s12 m4 l4 xl4 phase-container">
                        <label>Phase:</label>
                        <select value={phase} onChange={e => setPhase(e.target.value)}>
                            <option value="" disabled>Select</option>
                            <option value="CV">CV</option>
                            <option value="HR">HR</option>
                            <option value="Technical">Technical</option>
                            <option value="Final">Final</option>
                        </select>
                    </div>
                    <div className="col s12 m4 l4 xl4 status-container">
                        <label>Status:</label>
                        <select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="" disabled>Select</option>
                            <option value="Passed">Passed</option>
                            <option value="Declined">Declined</option>
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
                    <button className='waves-effect waves-light red btn' id='back' onClick={() => {
                        setActiveStep('Select Company')
                        navigate('/create-report/step2')}}>BACK</button>
                    <button className='waves-effect waves-light blue btn' id='submit' disabled={!interviewDate || !phase || !status || !note} onClick={createReportHandler}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}
