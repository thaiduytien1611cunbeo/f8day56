import React from "react";
import CardGallery from "../components/CardGallery";

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="gallery">
        D Ị C H V Ụ
      </h1>
      <div className="columns-3 py-3">
        <CardGallery />
        <CardGallery />
        <CardGallery />
      </div>
      <div className="columns-3 py-3">
        <CardGallery />
        <CardGallery />
        <CardGallery />
      </div>
    </div>
  );
};

export default Gallery;
