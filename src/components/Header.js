import { useNavigate } from 'react-router';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
    return(
        
      <nav>
        <div className="nav-wrapper blue header">
          <span className='flow-text'>Interviews Reports</span>
          <div className='button-header-box'>
            <button className='blue button' onClick={()=> navigate('/')}>Candidates</button> 
            <button className='blue button second-btn' onClick={()=> navigate('/reports')}>Reports</button> 
          </div>
        </div>
      </nav>
    );
}