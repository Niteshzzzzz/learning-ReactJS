import React, { useContext, useState } from 'react'
import CountriesList from './CountriesList';
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const [isDark, setIsDark] = useContext(ThemeContext);
    const [query, setquery] = useState('');
    return (
        <>
            <main className={`${isDark ? 'dark' : ''}`}>
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
