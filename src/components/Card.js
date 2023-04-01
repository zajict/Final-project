import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({candidates}) => {
    const navigate = useNavigate();

    return (
        <div>
        <div className='container row' id='candidate'>
            {candidates.map(candidate => (
                <div className='card col' onClick={() => navigate(`/candidate/${candidate.id}`)}>
                <img src= {candidate.avatar} alt='candidate' id='candidate-avatar'/>
            <div className='card-name'> {candidate.name}</div>
            <div className='card-email'> {candidate.email}</div>
                </div>
            ) 
            )}
        </div>
        </div>

    );
};
export default Card;

