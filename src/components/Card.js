import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({candidates}) => {
    const navigate = useNavigate();

    return (
        <div className=''>
        <div className='row' id='candidate'>
            {candidates.map(candidate => (
                <div className='card col xl4 m6 s12' onClick={() => navigate(`/candidate/${candidate.id}`)}>
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

