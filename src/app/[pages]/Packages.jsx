import React from "react";
import CardPackages from "../components/CardPackages";

const Packages = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="packages">
        Ư U Đ Ã I
      </h1>
      <div className="columns-3 py-3">
        <CardPackages />
        <CardPackages />
        <CardPackages />
      </div>
      <div className="columns-3 py-3">
        <CardPackages />
        <CardPackages />
        <CardPackages />
      </div>
    </div>
  );
};

export default Packages;
