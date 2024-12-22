import { Input } from "antd";
import React, { useEffect, useState } from "react";
import {  FaGlobe, FaMap, FaSearch } from "react-icons/fa";

const Search = (props) => {
  const [searchedValue, setSearchedValue] = useState();

  const handlSearchChange = (e) => {
    setSearchedValue(e.target.value);
  };
  useEffect(() => {
    props.onSearchedValue(searchedValue);
  }, [searchedValue]);
  return (
    <div className="mx-3 my-2 ">
      <label htmlFor="search">Search Countries:</label>
      <Input
        suffix={<FaSearch />}
        prefix={<FaGlobe className="mr-3" onClick={handlSearchChange}/>}
        type="text"
        placeholder="search countries"
        name="search"
        id="search"
        onChange={handlSearchChange}
        value={searchedValue}
      ></Input>
    </div>
  );
};

export default Search;
