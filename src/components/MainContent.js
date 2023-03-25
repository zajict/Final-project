import './MainContent.css';

export const MainContent = () => {
    return(
        <div className='container'>
            <main>
                <div class="row">
                    <div class="col s6"><h5>Candidates</h5></div>
                    <div class="col s6"><input className='search-input' type="text" placeholder="Search..." /></div>
                </div>

                <div>

                </div>
            </main>
        </div>
        
    );
}