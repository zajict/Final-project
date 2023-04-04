import { useState } from 'react';

import './CreateReport.css';
import { Outlet } from 'react-router';
import SideNavbar from './SideNavbar';


export const CreateReport = () => {
    const steps = ['Select Candidate','Select Company','Fill report details']
    const [activeStep, setActiveStep] = useState(steps[0]);  
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);
    return(
        <div id='wrapper2'>
            <div className='row'>
                <div className='col m4 s12 left-side'>
                <SideNavbar steps={steps} activeStep={activeStep} selectedCandidate={selectedCandidate} selectedCompany={selectedCompany}></SideNavbar>
                </div>
                <div className='col m8 s12'>
                        <div className='row'>
                        <Outlet context={[selectedCandidate,setSelectedCandidate, selectedCompany, setSelectedCompany]}/>
                            </div>
                    </div>
                </div>
        </div>
    )
}