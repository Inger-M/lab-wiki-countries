import React from 'react';
import { useParams } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = useParams();

  const countries = props.countries;

  const country = countries.find((item) => {
    return item.alpla3code === id;
  });
  return (
    <div>
      <h1>{country.name.common}</h1>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Capital</th>
            <td>Paris</td>
          </tr>
          <tr>
            <th scope="row">Area</th>
            <td>
              {country.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <th scope="row">Borders</th>
            <td>
              <ul>
                {country.borders.map((code) => (
                  <li key={code}>
                    <Link to={`/${code}`}>
                      {
                        countries.find((item) => item.alpha3code === code).name
                          .common
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
