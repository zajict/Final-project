import { useNavigate } from "react-router";

const SearchedCandidates = ({candidates, setSearchQuery}) => {
    const navigate = useNavigate();

    const handleCandidateClick = (id) => {
        navigate(`/candidate/${id}`)
        setSearchQuery("");
    }

    return (
        <div className="container" id="searchWrapper"
        ><div className="row">
        {candidates.map(candidate => (
            <div className="col m4 s6">
            <div className='card ' onClick={()=> handleCandidateClick(candidate.id)}>
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
        </div>
    );
};
export default SearchedCandidates;