import React from "react";
import CardServices from "../components/CardServices";

const Services = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="services">
        D Ị C H V Ụ
      </h1>
      <div className="columns-3 py-3">
        <CardServices />
        <CardServices />
        <CardServices />
      </div>
      <div className="columns-3 py-3">
        <CardServices />
        <CardServices />
        <CardServices />
      </div>
    </div>
  );
};

export default Services;
