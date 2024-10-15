import React, { useState } from 'react'
import { Navigator } from './Components/Navigator';
import './app.css'
import CountriesList from './Components/CountriesList';
import SearchBox from './Components/SearchBox';
import FilterBox from './Components/FilterBox';

const App = () => {
    const [query, setquery] = useState('');

    return (
        <>
            <Navigator />
            <main>
                <div className='filter-container'>
                    <SearchBox setQuery={setquery}/>
                    <FilterBox />
                </div>
                <CountriesList query={query}/>
            </main>
        </>
    )
}

export default App;
