import CountriesListShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";


import { useEffect, useState } from "react";

const CountriesList = ({ query }) => {

  const [countriesData, setCountryData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((req) => req.json())
      .then((countries) => {
        setCountryData(countries);
      })
  }, [])

  let array = countriesData.filter((counrty) => counrty.name.common.toLowerCase().includes(query)  || counrty.region.toLowerCase().includes(query)).map((country) => {
    return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital} data={country}/>;
  })

  if (countriesData.length === 0) {
    return <CountriesListShimmer />
  }

  return (
    <>
      <div className="countries-group">
        {array}
      </div>
    </>
  )
}

export default CountriesList;
