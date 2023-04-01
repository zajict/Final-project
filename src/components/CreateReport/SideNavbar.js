import React from 'react'
import './CreateReport.css'
import { Link } from 'react-router-dom'

const SideNavbar =( {steps, activeStep}) => {
  return (
    <ol key={'list'}>
     {steps.map((step) => (
      <li key={step} className={activeStep === step ? 'active steps' : 'steps'}>{step}</li>
     ))}
    </ol>
    
  )
}

export default SideNavbar