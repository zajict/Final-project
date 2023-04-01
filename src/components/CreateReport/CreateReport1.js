import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './CreateReport.css';
import { useNavigate, useParams } from 'react-router';
import SideNavbar from './SideNavbar';
import SearchedCandidateCR from './SearchedCandidateCR';


export const CreateReport = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const filteredCandidates = candidates.filter((candidate)=> candidate.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));  
    const navigate = useNavigate();
    const [candidateId, setCandidateId] = useState();
    const [selectedCandidate, setSelectedCandidate] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    const params = useParams();
    useEffect(() => {
            fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>{setCandidates(data);} ); 
    }, []);    


    const steps = ['Select Candidate','Select Company','Fill report details']
    const [activeStep, setActiveStep] = useState(steps[0]);  
    const handleNext = () => {
        navigate()
    }
    const handleBack = () => {
        navigate()
      }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col s4 left-side'>
                <SideNavbar steps={steps} activeStep={activeStep}></SideNavbar>
                </div>
                <div className='col s8'>
                        <div className='row'>
                            <Search candidates={candidates} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
                            </div>
                            <div className='row'>
                                    <SearchedCandidateCR candidates={filteredCandidates}setCandidateId={setCandidateId} steps={steps} activeStep={activeStep} handleNext={handleNext}></SearchedCandidateCR>   
                            </div>
                            {activeStep.key !== 'firstStep' &&  <button className='waves-effect waves-light red btn' id='back' value="Back" onClick={handleBack}>BACK</button> }
                            

                           
                    </div>
                </div>
        </div>
    )
}