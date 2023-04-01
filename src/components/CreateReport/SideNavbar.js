import React from 'react'
import './CreateReport.css'
import { useParams } from 'react-router';


const SideNavbar =( {steps, activeStep, selectedCompany, selectedCandidate}) => {
  const {step} = useParams();
  return (
    <>
    <ol key={'list'}>
     {steps.map((step) => (
      <li key={step} className={activeStep === step ? 'active steps' : 'steps'}>{step}</li>
     ))}
    </ol>
    {(step === 'step2' && 
    <div className='candidateSelected'>
    <span className='info'>{`Candidate:
    ${selectedCandidate}`}</span>
    
    </div>) || (step === 'step3' && <div className='candidateSelected'>
    <span className='info'>{`Candidate:
    ${selectedCandidate}`}</span>
    <span className='info'>{`Company:
    ${selectedCompany}`}</span>
    </div>)
    }
   
    </>
    
    
  )
}

export default SideNavbar