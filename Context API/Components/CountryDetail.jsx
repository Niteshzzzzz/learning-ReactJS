import { useContext, useEffect, useState } from "react";
import '../app.css'
import { Link, useLocation, useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext.js";
// import './Shimmer.css'

const CountryDetail = () => {
    const Params = useParams();
    const {stat} = useLocation();
    const countryName = Params.country; 
    const [counrtyData, setCountryData] = useState([]);
    const [failed, setFailed] = useState(false);
    const [isDark] = useContext(ThemeContext)

    function udpdateCountryData(data){
        console.log(data)
        setCountryData({
            name: data.name.common || data.name,
            flag: data.flags.svg,
            native: Object.values(data.name.nativeName || {})[0].common,
            population: data.population.toLocaleString('en-IN'),
            region: data.region,
            subregion: data.subregion || {},
            capital: data.capital || {},
            tld: data.tld,
            currencies: Object.values(data.currencies || {}).map((currency) => currency.name).join(','),
            language: Object.values(data.languages || {}).join(','),
            borders: []
        })

        if (!data.borders) {
            data.borders =[]
        }

        Promise.all(data.borders.map(border => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then(res => res.json())
            .then(([borderCountry]) => borderCountry.name.common)
        })).then(borders => {
            setTimeout(() => {
                setCountryData((prevState) => ({...prevState, borders}))   
            });
        })
    }

    useEffect(() => {

        if (stat) {
            udpdateCountryData(stat)
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(([data]) => {
                udpdateCountryData(data)
                
            }).catch((err => {
                setFailed(true);
            }))

    }, [countryName])

    if (failed == true) {
        return <div>Country not found?</div>
    }
    if (counrtyData.length === 0) {
        return (
            <main className="main">
                <a href="" className="back"><i className="fa-solid fa-arrow-left-long" onClick={() => history.back()}></i><span>&#160;&#160;Back</span></a>
                <div className="country-card">
                    <div className="image">
                        <img  onerror="this.style.display='none'" className="im"></img>
                    </div>
                    <div className="content">
                        <h2 className="hii"></h2>
                        <div className="content1">
                            <p className="not"></p>
                            <p className="not"></p>
                            <p className="not"></p>
                            <p className="not"></p>
                            <p className="not"></p>
                            <p className="not"></p>
                            
                        </div>
                        <div className="border-countries">
                            <p className="border">Border Countries: </p>
                            <Link to={'india'} className="vi"></Link>
                            <Link to={'india'} className="vi"></Link>
                            <Link to={'india'} className="vi"></Link>
                            <Link to={'india'} className="vi"></Link>
                            <Link to={'india'} className="vi"></Link>
                            <Link to={'india'} className="vi"></Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return counrtyData === null ? <div>loading...</div> : (
        <>
            <main className={`main ${isDark ? 'dark' : ''}`}>
                <a href="" className="back"><i className="fa-solid fa-arrow-left-long" onClick={() => history.back()}></i><span>&#160;&#160;Back</span></a>
                <div className="country-card">
                    <div className="image">
                        <img src={counrtyData.flag} alt="flag"></img>
                    </div>
                    <div className="content">
                        <h2>{counrtyData.name}</h2>
                        <div className="content1">
                            <p>Native Name: <span>{counrtyData.native || counrtyData.name}</span></p>
                            <p>Population: <span>{counrtyData.population}</span></p>
                            <p>Region: <span>{counrtyData.region}</span></p>
                            <p>Sub-region: <span>{counrtyData.subregion}</span></p>
                            <p>Capital: <span>{counrtyData.capital?.join(', ')}</span></p>
                            <p>Top Level Domain: <span>{counrtyData.tld}</span></p>
                            <p>Currencies: <span>{counrtyData.currencies}</span></p>
                            <p>Languages: <span>{counrtyData.language}</span></p>
                        </div>
                        {counrtyData.borders && <div className="border-countries">
                            <p className="border">Border Countries: </p>
                            {
                                
                                counrtyData.borders.map((border) =>
                                    <Link to={`/${border}`} key={border}>{border}</Link>
                                )
                            }
                        </div>}
                    </div>
                </div>
            </main>

        </>
    )
}

export default CountryDetail;
