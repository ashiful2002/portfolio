import React, { useEffect, useState } from "react";
import axios from "axios";

import Section from "../../../Components/Title.jsx/Section";
import PageTitle from "../../../Components/Title.jsx/PageTitle";
import Countries from "./Countries";
import Search from "./Search";
import Rspinner from "../../../Components/Spinner";
const url = "https://restcountries.com/v3.1/all";
 
const CountryApp = () => {
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [fiteredCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setisLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      isLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemovedCountry = (name) => {
    const filter = fiteredCountries.filter(
      (country) => country.name.common !== name,
    );
    setFilterCountries(filter);
  };
  const handleSearchedValue = (searchedValue) => {
    let value = searchedValue;
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common;
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  };
  return (
    <Section id="countryApp">
      <PageTitle
        heading="country app"
        className="bg-transparent text-teal-600"
      />
      <div>
        <Search onSearchedValue={handleSearchedValue} />
        {isLoading && <Rspinner>Loading Country data</Rspinner>}
        {error && <h2>{error.message}</h2>}
        {countries && (
          <Countries
            countries={fiteredCountries}
            onRemovedCountry={handleRemovedCountry}
          />
        )}
      </div>
    </Section>
  );
};

export default CountryApp;
// axios
// .get("https://restcountries.com/v3.1/all")
// .then((response) => {
//   console.log(response.data);
// })
// .catch((error) => {
//   console.log(error);
// })
