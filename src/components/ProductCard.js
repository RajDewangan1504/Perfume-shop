import React from "react";
import { useNavigate } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate(`/product/${product.id}`);
  };

  const features = product.features && Array.isArray(product.features) ? product.features : [];

  return (

    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative  mx-3 mt-3 flex justify-center items-center h-60 overflow-hidden rounded-xl" >
        <img
          className="object-cover w-full h-full "
          src={product.image}
          alt={product.name || "Product Image"}
          onError={(e) => {
            e.target.src = "/VillaindesireBanner.webp"; // Fallback image
          }}
        />
        {product.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.discount} OFF
          </span>
        )}
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
            )}
          </p>
          <div className="flex items-center">
            {/* Rating */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            {/* <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span> */}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <h1 className="font-bold cursor-pointer"><CiShare2 size={30} /></h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
