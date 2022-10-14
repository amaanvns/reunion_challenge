import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import Property from "./Property";
import "./Properties.css";

const Properties = () => {
  const properties = useSelector((state) => state.property.property);
  const isLoading = useSelector((state) => state.property.isLoading);
  return (
    <div>
      <Filters />
      {isLoading ? (
        <>
          <div className="loading">Loading...</div>
        </>
      ) : (
        <>
          {properties.length !== 0 ? (
            <>
              {" "}
              <div className="grid-container">
                {properties?.map((property) => (
                  <div className="grid-item" key={property.id}>
                    <Property property={property} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="loading">No Data Found</div>
          )}
        </>
      )}
    </div>
  );
};

export default Properties;
