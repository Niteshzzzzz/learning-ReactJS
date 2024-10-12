import CountryCard from "./CountryCard";
import CountryCard from "./CountryCard";
import countriesData from '../countriesData.js';

const CountriesList = () => {
    console.log(countriesData)
    let array = countriesData.map((country) => {
        
        return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital}/>;
    })

  return (
    <div className="countries-group">
        {array}
    </div>
  )
}

export default CountriesList;
