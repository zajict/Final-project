import React, { useEffect, useState } from 'react'
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
    {step === 'step3' && <h1>Step3</h1>}
    </div>
    
  )
}

export default StepContent