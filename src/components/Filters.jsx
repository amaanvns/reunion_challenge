import React, { useEffect, useState } from "react";
import { filterData } from "../utils/filterData";
import { propertiesForRent } from "../features/property/propertySlice";
import { useDispatch } from "react-redux";
import "./Filters.css";

const Filters = () => {
  const disptach = useDispatch();
  const [filters, setFilters] = useState(filterData);
  const [filterOption, setFilterOption] = useState({
    rentFrequency: "yearly",
    minPrice: "0",
    maxPrice: "1000000",
    roomsMin: "0",
    bathsMin: "0",
    sort: "price-desc",
    locationExternalIDs: "5002",
    categoryExternalID: "4",
  });

  const handleChange = (e) => {
    setFilterOption({ ...filterOption, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setFilterOption({
      rentFrequency: "yearly",
      minPrice: "0",
      maxPrice: "1000000",
      roomsMin: "0",
      bathsMin: "0",
      sort: "price-desc",
      locationExternalIDs: "5002",
      categoryExternalID: "4",
    });
  };
  useEffect(() => {
    disptach(propertiesForRent(filterOption));
  }, [filterOption]);

  return (
    <div className="filterContainer">
      {filters.map((filter) => (
        <select
          name={filter.queryName}
          className="selectFilter"
          placeholder={filter.placeholder}
          onChange={(e) => handleChange(e)}
        >
          <option disabled selected value="">
            {filter.placeholder}
          </option>
          {filter.items.map((item) => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>
      ))}
      <button className="resetButton" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default Filters;
