import './MainContent.css';
import {MainCandidates} from './MainCandidates'


export const MainContent = () => {


    return (<div className='container'>
        <main>
            <div className="row">
                <div className="col s6">
                    <h5>Candidates</h5>
                </div>
                <div className="col s6"><input className='search-input' type="text" placeholder="Search..."/></div>
            </div>

            <div>
                <MainCandidates/>
            </div>
        </main>
    </div>);
}
