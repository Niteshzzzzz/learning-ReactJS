
const SearchBox = ({setQuery}) => {
    return (
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e) => {setQuery(e.target.value.toLowerCase())}} type="text" placeholder="Search for a country..." fdprocessedid="bsire5" />
        </div>)
}

export default SearchBox;
