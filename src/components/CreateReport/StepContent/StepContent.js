import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useNavigate, useParams } from 'react-router'
import SearchedCandidateCR from '../CandidateSelector/SearchedCandidateCR';
import './StepContent.css'

const StepContent = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const navigate = useNavigate();
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState();
    useEffect(() => {
        fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>{setCandidates(data);} ); 
    }, []);  
    const filteredCandidates = candidates.filter((candidate)=> candidate.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())); 
    const {step} = useParams();
    console.log(step);
  return (
    <div className='container'>
    {step === 'step1' && <SearchedCandidateCR candidates={filteredCandidates} setSelectedCandidate={setSelectedCandidate} selectedCandidate={selectedCandidate} setSearchQuery= {setSearchQuery} searchQuery={searchQuery}/>}
    {step === 'step2' && <SelectCompany/>}
=======
import { useNavigate, useOutletContext, useParams } from 'react-router'
import SearchedCandidateCR from '../CandidateSelector/SearchedCandidateCR';
import './StepContent.css'
import SelectCompany from '../CompanySelector/SelectCompany';

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
>>>>>>> 4ec621409f720ec55313ceb469b85df7dbd1bdec
    {step === 'step3' && <h1>Step3</h1>}
    </div>
    
  )
}

export default StepContent