import Search from '../../Search/Search'
import { useNavigate } from 'react-router'
import './SelectCompany.css'

const SelectCompany = ({searchQuery,setSearchQuery, filteredCompanies, selectedCompany, setSelectedCompany}) => {
    const navigate = useNavigate();

    const handleCompanyClick = (companyName) => {
        setSelectedCompany(companyName)
    }
    return (
        <div id="wrapper-company">
            <div className="row">
            <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
            {filteredCompanies.map(company => (
            <div className={`card col m4 s12 companies`} onClick={(e)=> {
                handleCompanyClick(company.name)
                e.currentTarget.classList.toggle('selected')
            }}>
                <h4>{company.name}</h4>
                </div>
                
        ))}
        </div>
        <div className='row'>
            <button className='waves-effect waves-light red btn' id='back' onClick={() =>{navigate('/create-report/step1')} }>BACK</button>
            <button className='waves-effect waves-light blue btn' id='next' disabled={selectedCompany === null} onClick={() =>{navigate('/create-report/step3')} }>NEXT</button>
        </div>
        
    
        </div>
    )
}

export default SelectCompany