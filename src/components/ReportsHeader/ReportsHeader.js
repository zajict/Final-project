import '../Header.css';
import { useNavigate } from 'react-router';

export const ReportsHeader = () => {
    const navigate = useNavigate();

    return (
        <nav>
          <div className="nav-wrapper blue header">
            <span className='flow-text'>Reports Administration</span>
            <div>
              <button className='blue button' onClick={()=> navigate('/reports')}>Reports</button> 
              <button className='blue button second-btn' onClick={()=> navigate('')}>Create Report</button> 
            </div>
          </div>
        </nav>
      );
    
}