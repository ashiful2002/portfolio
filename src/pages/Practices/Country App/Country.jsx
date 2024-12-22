import React, { useState } from "react";
import Button from "../../../Components/Button";
const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;

  const [rCountry, setRCountry] = useState();

  const handleRemoveClick = (e) => {
    props.onRemovedCountry(e);
  };
  return (
    <div>
      <div className="">
        <img className="" src={flags.png} alt={name.common} />
        <div className="p-2 ">
          <h3 className="text-primary-color hover:text-secondary-color">
            Name: {name.common}
          </h3>
          <p>Population: {population}</p>
          <p>Capital: {capital}</p>
          <p>Area: {area} sqrkm</p>
          <Button
            className="mx-auto block"
            varient="delete"
            onClick={() => {
              handleRemoveClick(name.common);
            }}
            name={name.common}
          >
            remove Country
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Country;
