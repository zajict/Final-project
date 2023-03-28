import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({candidates}) => {
    const navigate = useNavigate();

    return (
        <div>
        <div className='container candidates'>
            {candidates.map(candidate => (
                <div className='card' onClick={() => navigate(`/candidate/${candidate.id}`)}>
            <div className='card-image'>
                <img src= {
                        "https://static.thenounproject.com/png/363640-200.png"
                    } alt='candidate'/>
            </div>
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


