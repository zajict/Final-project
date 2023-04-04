import { FaSearch } from "react-icons/fa"
import './Search.css'

const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="container">
      <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <label className="label-icon"><FaSearch className="icon"/></label>
          <div className="divider"></div>
        </div>
      </form>
    </div>  
        </div>
    )
}
export default Search;