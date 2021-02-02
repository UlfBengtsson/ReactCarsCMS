import React from "react";

const CarDetails = (props) => {
  return (
    <dl>
      <dt>Brand</dt>
      <dd>{props.car.brand}</dd>
      <dt>Model</dt>
      <dd>{props.car.modelName}</dd>
      <dt>Year</dt>
      <dd>{props.car.year}</dd>
    </dl>
  );
};

export default CarDetails;
