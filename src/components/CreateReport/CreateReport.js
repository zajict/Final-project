import { useState } from 'react';

import './CreateReport.css';
import { Outlet } from 'react-router';
import SideNavbar from './SideNavbar';


export const CreateReport = () => {
    const steps = ['Select Candidate','Select Company','Fill report details']
    const [activeStep, setActiveStep] = useState(steps[0]);  
<<<<<<< HEAD

    return(
        <div className='container' id='wrapper'>
            <div className='row'>
                <div className='col m5 s12 left-side'>
                <SideNavbar steps={steps} activeStep={activeStep}></SideNavbar>
                </div>
                <div className='col m7 s12'>
                        <div className='row'>
                        <Outlet/>
=======
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);
    return(
        <div id='wrapper'>
            <div className='row'>
                <div className='col m4 s12 left-side'>
                <SideNavbar steps={steps} activeStep={activeStep} selectedCandidate={selectedCandidate} selectedCompany={selectedCompany}></SideNavbar>
                </div>
                <div className='col m8 s12'>
                        <div className='row'>
                        <Outlet context={[selectedCandidate,setSelectedCandidate, selectedCompany, setSelectedCompany]}/>
>>>>>>> 4ec621409f720ec55313ceb469b85df7dbd1bdec
                            </div>
                    </div>
                </div>
        </div>
    )
}