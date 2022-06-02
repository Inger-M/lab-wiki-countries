import React from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';

function CountriesList() {
  return (
    <div>
      <ul>
        {countriesData.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
