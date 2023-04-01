import React from 'react'
import './CreateReport.css'
import { useParams } from 'react-router';


<<<<<<< HEAD
const SideNavbar =( {steps, activeStep}) => {
=======
const SideNavbar =( {steps, activeStep, selectedCompany, selectedCandidate}) => {
  const {step} = useParams();
>>>>>>> 4ec621409f720ec55313ceb469b85df7dbd1bdec
  return (
    <>
    <ol key={'list'}>
     {steps.map((step) => (
      <li key={step} className={activeStep === step ? 'active steps' : 'steps'}>{step}</li>
     ))}
    </ol>
<<<<<<< HEAD
=======
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
    
>>>>>>> 4ec621409f720ec55313ceb469b85df7dbd1bdec
    
  )
}

export default SideNavbar