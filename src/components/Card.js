import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({candidates}) => {
    const navigate = useNavigate();

    return (
        <div>
        <div className='container row' id='candidate'>
            {candidates.map(candidate => (
                <div className='card col s6' onClick={() => navigate(`/candidate/${candidate.id}`)}>
            <div className='card-image'>
                <img src= {
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qM2m_aEWRcBU1u-tMav3P6RBYWDIJQMVHx9IIeixwFITKDDyR43ok9TJRtoP2BeyYtk&usqp=CAU"
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


