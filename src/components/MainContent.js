import './MainContent.css';
import {MainCandidates} from './MainCandidates'
import { useEffect, useState } from 'react';
import Search from './Search/Search';
import SearchedCandidates from './Search/SearchedCandidates';


export const MainContent = () => {
    
    const [fetchedCandidates, setFetchCandidates] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");

    useEffect(() => {
        fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>{setFetchCandidates(data);}
        )
    }, [])
    const filteredCandidates = fetchedCandidates.filter((candidates)=> candidates.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

    return (<div className='container'>
        <main>
            <div className="row">
                <div className="col s6">
                    <h5>Candidates</h5>
                </div>
                <div className="col s6"><Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/></div>
            </div>
            <div>
                {searchQuery ? (<SearchedCandidates candidates={filteredCandidates} setSearchQuery={setSearchQuery}/>) : (<MainCandidates/>) }
            </div>
        </main>
    </div>);
}
