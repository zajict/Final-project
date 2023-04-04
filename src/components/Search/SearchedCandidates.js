import { useNavigate } from "react-router";
import '../Card.css'
const SearchedCandidates = ({candidates, setSearchQuery}) => {
    const navigate = useNavigate();

    const handleCandidateClick = (id) => {
        navigate(`/candidate/${id}`)
        setSearchQuery("");
    }

    return (
        <div className="">
        <div className="row" id="candidate">
        {candidates.map(candidate => (
            <div className="card col s6" onClick={()=> handleCandidateClick(candidate.id)}>
                <img src= {
                        candidate.avatar
                    } alt='candidate' id="candidate-avatar"/>
            <div className='card-name'> {candidate.name}</div>
            <div className='card-email'> {candidate.email}</div>
        </div>
        ))}
        </div>
        </div>
    );
};
export default SearchedCandidates;