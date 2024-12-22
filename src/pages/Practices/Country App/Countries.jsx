import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
const Countries = (props) => {
  return (
    <div>
      <div className="sm:grid-col-2 mx-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
        {props.countries.map((country) => {
          const countryNew = { country, id: uuidv4() };
          return (
            <div className="mx-auto rounded border shadow-sm transition-all hover:scale-105">
              <Country
                {...countryNew}
                key={countryNew.id}
                onRemovedCountry={props.onRemovedCountry}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
