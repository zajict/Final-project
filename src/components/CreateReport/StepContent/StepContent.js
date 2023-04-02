import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router'
import SearchedCandidateCR from '../CandidateSelector/SearchedCandidateCR';
import './StepContent.css'
import SelectCompany from '../CompanySelector/SelectCompany';
import { ReportDetails } from '../ReportDetails/ReportDetails';

const StepContent = () => {
    const [candidates, setCandidates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const navigate = useNavigate();
   const [selectedCandidate,setSelectedCandidate, selectedCompany, setSelectedCompany] = useOutletContext();
    useEffect(() => {
        fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>{setCandidates(data);} ); 
    }, []);  
    useEffect(() => {
        fetch('http://localhost:3333/api/companies').then((response) => response.json()).then(data => {
            setCompanies(data)
    })
    })
    const filteredCandidates = candidates.filter((candidate)=> candidate.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())); 
    const filteredCompanies = companies.filter((company)=> company.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())); 
    const {step} = useParams();

  return (
    <div className='container'>
    {step === 'step1' && <SearchedCandidateCR candidates={filteredCandidates} setSelectedCandidate={setSelectedCandidate} selectedCandidate={selectedCandidate} setSearchQuery= {setSearchQuery} searchQuery={searchQuery}/>}
    {step === 'step2' && <SelectCompany setSearchQuery= {setSearchQuery} searchQuery={searchQuery} filteredCompanies={filteredCompanies} setSelectedCompany={setSelectedCompany} selectedCompany={selectedCompany}/> }
    {step === 'step3' && <ReportDetails selectedCandidate={selectedCandidate} selectedCompany={selectedCompany}/>}
    </div>
    
  )
}

export default StepContent