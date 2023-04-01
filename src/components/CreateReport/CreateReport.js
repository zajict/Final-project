import { useState } from 'react';

import './CreateReport.css';
import { Outlet } from 'react-router';
import SideNavbar from './SideNavbar';


export const CreateReport = () => {
    const steps = ['Select Candidate','Select Company','Fill report details']
    const [activeStep, setActiveStep] = useState(steps[0]);  

    return(
        <div className='container'>
            <div className='row'>
                <div className='col m5 s12 left-side'>
                <SideNavbar steps={steps} activeStep={activeStep}></SideNavbar>
                </div>
                <div className='col m7 s12'>
                        <div className='row'>
                        <Outlet/>
                            </div>
                    </div>
                </div>
        </div>
    )
}