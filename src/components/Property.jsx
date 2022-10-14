import React from "react";
import "./Property.css";

const Property = ({ property }) => {
  return (
    <div className="propertyContainer">
      <div className="imageContainer">
        <img className="image" src={property.coverPhoto.url} alt="" />
      </div>
      <div className="heading">
      <div>{property.agency.name}</div>
      </div>
      <div className="details">
        <div>Price: ${property.price}/{property.rentFrequency}</div>
        <div>Beds: {property.rooms}</div>
      </div>
      <div className="details">
        <div>Status: {property.furnishingStatus || "N/A"} </div>
        <div>Baths: {property.rooms}</div>
      </div>
    </div>
  );
};

export default Property;
