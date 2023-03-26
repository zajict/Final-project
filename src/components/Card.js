import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({avatar, email, name, id}) => {
    const navigate = useNavigate();

    return (
        <div className='card' onClick={() => navigate(`/candidate/${id}`)}>
            <div className='card-image'>
                <img src= {
                        "https://static.thenounproject.com/png/363640-200.png"
                    } alt='candidate'/>
            </div>
            <div className='card-name'> {name}</div>
            <div className='card-email'> {email}</div>
        </div>
    );
};
export default Card;
