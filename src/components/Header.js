import './Header.css';

export const Header = () => {
    return(
        
      <nav>
        <div className="nav-wrapper blue header">
          <span className='interview-text'>Interviews Reports</span>
          <button className='blue button'>Candidates</button> 
        </div>
      </nav>
    );
}