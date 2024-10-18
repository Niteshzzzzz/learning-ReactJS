import React, { useState } from 'react'
import CountriesList from './CountriesList';
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';
import { useTheme } from '../Hooks/useTheme';

const Home = () => {
    const [isDark, setIsDark] = useTheme();
    const [query, setquery] = useState('');  

    return (
        <>
            <main className={`${isDark ? 'dark' : ''}`}>
                <div className='filter-container'>
                    <SearchBox setQuery={setquery} />
                    <FilterBox setQuery={setquery} />
                </div>
                <CountriesList query={query} />
            </main>
        </>
    )
}

export default Home;
