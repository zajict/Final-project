import { FaSearch } from "react-icons/fa"

const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="container">
        
      <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder="Search shows" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <label className="label-icon"><FaSearch/></label>
          <div className="divider"></div>
        </div>
      </form>
    </div>  
        </div>
    )
}
export default Search;