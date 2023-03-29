import { useNavigate } from 'react-router';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
    return(
        
              <nav>
    <div className="nav-wrapper blue header">
        <span className='flow-text'>Interviews Reports</span>
        <button className='blue button' onClick={()=> navigate('/')}>Candidates</button> 
    </div>
  </nav>
        
    );
}