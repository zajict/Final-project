import './MainContent.css';
import { useEffect, useState } from 'react';
import Search from './Search/Search';
import SearchedCandidates from './Search/SearchedCandidates';
import Card from './Card';


export const MainContent = () => {
    
    const [searchQuery,setSearchQuery] = useState("");

        const [candidates, setCandidates] = useState([]);
    useEffect(() => {
            fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>{setCandidates(data);} ); 
    }, []);

    const filteredCandidates = candidates.filter((candidates)=> candidates.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
    
    return (<div className=''>
        <main className=''>
            <div className="row search-candidates-box">
                <div className="col s12 m12 l6 xl6" id='col-title'>
                    <h5>Candidates</h5>
                </div>
                <div className="col s12 m12 l6 xl6" id=' col-search'><Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/></div>
            </div>
            <div id='candidate-box'>
                {searchQuery ? (<SearchedCandidates candidates={filteredCandidates} setSearchQuery={setSearchQuery}/>) : (<Card candidates={candidates}/>) }
            </div>
        </main>
    </div>);
}
