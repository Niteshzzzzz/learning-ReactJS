import { useEffect, useState } from "react";
import '../app.css'
import { useParams } from "react-router-dom";

const CountryDetail = () => {
    const Params = useParams();
    console.log(Params)
    const countryName = Params.country; 
    const [counrtyData, setCountryData] = useState([]);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(data => {
                setCountryData({
                    name: data[0].name.common,
                    flag: data[0].flags.svg,
                    native: Object.values(data[0].name.nativeName)[0].common,
                    population: data[0].population.toLocaleString('en-IN'),
                    region: data[0].region,
                    subregion: data[0].subregion,
                    capital: data[0].capital,
                    tld: data[0].tld,
                    currencies: Object.values(data[0].currencies).map((currency) => currency.name).join(','),
                    language: Object.values(data[0].languages).join(',')
                })
            }).catch((err => {
                console.log(err)
                setFailed(true);
            }))

    }, [])

    if (failed == true) {
        return <div>Country not found?</div>
    }

    return counrtyData === null ? <div>loading...</div> : (
        <>
            <main className="main">
                <a href="" className="back"><i className="fa-solid fa-arrow-left-long" onClick={() => history.back()}></i><span>&#160;&#160;Back</span></a>
                <div className="country-card">
                    <div className="image">
                        <img src={counrtyData.flag} alt="flag"></img>
                    </div>
                    <div className="content">
                        <h2>{counrtyData.name}</h2>
                        <div className="content1">
                            <p>Native Name: <span>{counrtyData.native}</span></p>
                            <p>Population: <span>{counrtyData.population}</span></p>
                            <p>Region: <span>{counrtyData.region}</span></p>
                            <p>Sub-region: <span>{counrtyData.subregion}</span></p>
                            <p>Capital: <span>{counrtyData.capital}</span></p>
                            <p>Top Level Domain: <span>{counrtyData.tld}</span></p>
                            <p>Currencies: <span>{counrtyData.currencies}</span></p>
                            <p>Languages: <span>{counrtyData.language}</span></p>
                        </div>
                        <div className="border-countries">
                            <p className="border">Border Countries: </p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default CountryDetail;
