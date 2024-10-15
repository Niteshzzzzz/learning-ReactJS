import React from 'react'
import { Link } from 'react-router-dom';

export const CountryCard = ({name, flag, population, region, capital, data}) => {
  return (
    <Link className="country" to={`./${name}`} stat = {data}>
            <img src={flag} alt="flag"/>
            <div className="about">
                <h3>{name}</h3>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </Link>
  )
}

export default CountryCard;
