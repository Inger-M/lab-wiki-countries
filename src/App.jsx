import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data.reverse());
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
        <div className="col">
          <Routes>
            <Route path="/:id" element={<CountryDetails />} />
            {/* React-Router Route rendering the CountryDetails should go here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
