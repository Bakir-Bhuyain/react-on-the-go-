import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
      const [visitedCountries, setVisitedCountries] = useState([]);

      const handleVisitedCountries = (country) =>{
            console.log('handle visited country clicked', country)
      }  
      const countriesData = use(countriesPromise);
      //.countries j last e ache eta muloto api er theke ana countries.(countriesData.countries)
      const countries = countriesData.countries;
      return (
            <div>
                  <h1>In the Countries: {countries.length}</h1>
                  <h3>total countries: </h3>
                  <div className='countries'>
                        {
                              countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3}></Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;