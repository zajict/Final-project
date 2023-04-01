import React from 'react'
import './CreateReport.css'

const SideNavbar =( {steps, activeStep}) => {
  console.log(steps);
  return (
    <ol key={'list'}>
     {steps.map((step) => (
      <li key={step} className={activeStep === step ? 'active steps' : 'steps'}>{step}</li>
     ))}
    </ol>
  )
}

export default SideNavbar