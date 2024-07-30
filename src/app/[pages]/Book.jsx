import React from "react";
import Example from "../components/Form";

const Book = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="book">
        T Ì M Ư U Đ Ã I
      </h1>
      <div className="columns-2">
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
          alt="a"
        />
        <Example />
      </div>
    </div>
  );
};

export default Book;
