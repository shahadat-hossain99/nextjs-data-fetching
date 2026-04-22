import React from "react";

const BookCard = ({ book }) => {
  const { title, author, price, description, rating, pages } = book;

  return (
    <div className="card  bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title font-extrabold text-2xl">{title}</h2>
        <h3 className="text-xl font-bold">{author}</h3>
        <p>{description}</p>
        <p className="">Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
