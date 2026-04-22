const DetailsCard = ({ book }) => {
  const { title, author, price, description, rating } = book;

  return (
    <div className=" container flex justify-center items-center mx-auto">
      <div className="card  bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{title}</h2>
            <span className="text-xl">${price}</span>
          </div>
          <h3 className="font-bold text-2xl italic">{author}</h3>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{description}</span>
            </li>
          </ul>
          <div className="mt-6 max-w-1/2 mx-auto">
            <button className="btn btn-primary btn-block">Buy Now !!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
