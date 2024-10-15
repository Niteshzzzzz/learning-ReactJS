import React, { useState } from 'react'

import CountriesList from './CountriesList';
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';

const Home = () => {
    const [query, setquery] = useState('');
    return (
        <>
            <main>
                <div className='filter-container'>
                    <SearchBox setQuery={setquery} />
                    <FilterBox />
                </div>
                <CountriesList query={query} />
            </main>
        </>
    )
}

export default Home;
