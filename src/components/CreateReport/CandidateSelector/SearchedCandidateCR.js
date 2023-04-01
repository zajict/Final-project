import './CandidateSelect.css'
import { useNavigate } from "react-router";
import Search from "../../Search/Search";



const SearchedCandidateCR = ({candidates, setSelectedCandidate, selectedCandidate, searchQuery, setSearchQuery}) => {
    const navigate = useNavigate()
    const handleCandidateClick = (candidateName) => {
        setSelectedCandidate(candidateName)
    }
    
    return (
        <div id="wrapper">
            <div className="row">
            <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
            {candidates.map(candidate => (
            <div className={`col m6 s12 flex`} >
                <div className={`card longer` } onClick={(e)=>{
                e.currentTarget.classList.toggle('selected')
                handleCandidateClick(candidate.name)}
            }>
                <img src= {candidate.avatar} alt='candidate' style={{width: '50px'}}/>
                    <div className="card-info">
                    <div className='card-name'> {candidate.name}</div>
                    <div className='card-email'> {candidate.email}</div>
                        </div>
                   
                </div>
            </div>
        ))}
        </div>
        <button className='waves-effect waves-light blue btn' id='next' disabled={selectedCandidate === null} onClick={() =>{navigate('/create-report/step2')} }>NEXT</button>
        </div>
    );
};
export default SearchedCandidateCR;