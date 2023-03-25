import './MainContent.css';
import React, { useEffect } from 'react';
import { async } from 'q';

export const MainContent = () => {

  
    return(
        <div className='container'>
            <main>
                <div className="row">
                    <div className="col s6"><h5>Candidates</h5></div>
                    <div className="col s6"><input className='search-input' type="text" placeholder="Search..." /></div>
                </div>

                <div>

                </div>
            </main>
        </div>
        
    );
}