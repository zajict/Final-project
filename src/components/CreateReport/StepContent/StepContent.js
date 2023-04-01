import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import SearchedCandidateCR from '../CandidateSelector/SearchedCandidateCR';

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
  return (
    <>
    <SearchedCandidateCR candidates={filteredCandidates} setSelectedCandidate={setSelectedCandidate} selectedCandidate={selectedCandidate} setSearchQuery= {setSearchQuery} searchQuery={searchQuery}/>
    </>
    
  )
}

export default StepContent