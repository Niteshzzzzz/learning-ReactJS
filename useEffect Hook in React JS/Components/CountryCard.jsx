import React from 'react'

export const CountryCard = ({name, flag, population, region, capital}) => {
  return (
    <a className="country" href="/country.html?name=Moldova">
            <img src={flag} alt="flag"/>
            <div className="about">
                <h3>{name}</h3>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </a>
  )
}

export default CountryCard;
