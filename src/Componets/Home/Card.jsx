/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ image, title, brand, description, price, id }) {
  return (
    <div className="w-full p-2 h-full  bg-white rounded flex flex-col justify-between cursor-pointer hover:scale-105 duration-300">
      <Link to={`/product/${id}`}>
        <div>
          <img
            className=" h-60 object-contain "
            src={image}
            alt="product image"
          />
          <h1 className=" font-extrabold uppercase text-2xl">{title}</h1>
          <h2 className="text-xl text-gray-700 font-bold uppercase">{brand}</h2>
          <p>{description}</p>
          <h1 className="text-green-700 font-extrabold text-2xl">${price}</h1>
        </div>
      </Link>

      <div className="">
        <Link to={`/product/${id}`}>
          <h1 className="bg-orange-500 font-bold p-2 text-xl cursor-pointer text-center">
            Product Details
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Card;
