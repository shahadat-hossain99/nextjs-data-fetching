const ProductsCard = ({ product }) => {
  const { id, name, price, description, rating, inStock } = product;
  console.log(name);

  return (
    <div className="card bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
