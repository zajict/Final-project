import { useNavigate } from "react-router";

const SearchedCandidates = ({candidates, setSearchQuery}) => {
    const navigate = useNavigate();

    const handleCandidateClick = (id) => {
        navigate(`/candidate/${id}`)
        setSearchQuery("");
    }

    return (
        <>
        {candidates.map(candidate => (
            <div className='card' onClick={()=> handleCandidateClick(candidate.id)}>
            <div className='card-image'>
                <img src= {
                        candidate.avatar
                    } alt='candidate'/>
            </div>
            <div className='card-name'> {candidate.name}</div>
            <div className='card-email'> {candidate.email}</div>
        </div>
        ))}
        </>
    );
};
export default SearchedCandidates;