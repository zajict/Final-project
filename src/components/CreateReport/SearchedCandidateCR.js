import { useState } from "react";

const SearchedCandidateCR = ({candidates, setCandidateId, steps, activeStep, handleNext}) => {

const [isSelected, setIsSelected] = useState(false)

    const handleCandidateClick = (id) => {
        setIsSelected(prevState => !prevState && setCandidateId(id)
        )
        
    }
    console.log(candidates);
    return (
        <div className="container" id="searchWrapper">
            <div className="row">
            {candidates.map(candidate => (
            <div className="col m4 s6">
            <div className={`card ${isSelected ? 'selected' : ''}` } onClick={()=> handleCandidateClick(candidate.id)}>
            <div className='card-image changedWidth'>
                <img src= {
                        candidate.avatar
                    } alt='candidate'/>
            </div>
            <div className='card-name'> {candidate.name}</div>
            <div className='card-email'> {candidate.email}</div>
        </div>
        </div>
        ))}
        </div>
        <button className='waves-effect waves-light blue btn' id='next' onClick={handleNext}>NEXT</button>
        </div>
    );
};
export default SearchedCandidateCR;