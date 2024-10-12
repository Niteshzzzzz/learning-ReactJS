import React from 'react'
import { Navigator } from './Components/Navigator';
import './app.css'
import CountriesList from './Components/CountriesList';
import SearchBox from './Components/SearchBox';
import FilterBox from './Components/FilterBox';

const App = () => {
    return (
        <>
            <Navigator />
            <main>
                <div className='filter-container'>
                    <SearchBox />
                    <FilterBox />
                </div>
                <CountriesList />
            </main>
        </>
    )
}

export default App;
