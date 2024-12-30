import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"; // Import React Slick
import { CiShare2 } from "react-icons/ci";
import Loader from "../components/Loader";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState(""); // State for new review input

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://olcademy-backend.onrender.com/api/v1/product/product-details/${id}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data?.data); // Assuming API response matches your product schema
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (newReview) {
      try {
        const response = await fetch(
          `https://olcademy-backend.onrender.com/api/v1/product/${id}/review`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ review: newReview }), // Sending the review as JSON
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Review submitted successfully:", data);
        setNewReview(""); // Clear the review input after submission
        setProduct((prevProduct) => ({
          ...prevProduct,
          review: [...prevProduct.review, newReview], // Update the review list
        }));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Slick settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 2000,      // Set the autoplay speed to 2000ms (2 seconds)
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden my-10 sm:my-5">
      <div className="flex flex-col items-center md:flex-row">
        {/* Product Image Carousel */}
        <div className="md:w-1/3 w-full p-4 relative">
          <Slider {...settings}>
            {product.productImage.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${product.productName} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Details */}
        <div className="md:w-2/3 w-full p-6">
          <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.productName}</h1>
          <h1  className="font-bold cursor-pointer"><CiShare2 size={30} /></h1>
          </div>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>

          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
              {product.rating} ★
            </span>
            <span className="text-sm text-gray-500 ml-2">{product.review.length} reviews</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.discount && (
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Save {product.discount}
              </span>
            )}
          </div>

          <p className="text-green-600 text-sm font-semibold mb-4">Free Delivery</p>

          <div className="flex space-x-4">
            <button className="flex-1 bg-black text-white rounded hover:bg-gray-800 font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-300">
              Buy Now
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
        <div className="mb-6 mx-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews:</h2>
          <ul className="text-sm text-gray-700">
            {product.review.map((review, index) => (
              <li key={index} className="flex items-center mb-1">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {review}
              </li>
            ))}
          </ul>
        </div>

        {/* Add New Review Form */}
        <div className="mb-6 mx-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add a Review:</h2>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows="4"
              className="m-5  w-[90%] sm:w-[90%] p-2 border  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
              placeholder="Write your review here..."
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-black  text-white rounded hover:bg-gray-800"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
