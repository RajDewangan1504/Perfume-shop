import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import About from "../components/About";
import Loader from "../components/Loader"

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://olcademy-backend.onrender.com/api/v1/product/get-product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          throw new Error(data.message || "Error fetching products");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center"><Loader/></div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      <div >
      
      <Banner className="w-full h-full" />
      </div>
      <div className="flex flex-wrap justify-center flex-col">
      <h1 className="text-3xl mt-10 py-5 font-bold flex justify-center  text-center" >Top Perfumes </h1>
       <div className="grid md:grid-cols-4 grid-cols-1">
       {products.map((product) => (
          <ProductCard key={product._id} product={{
            id: product._id,
            name: product.productName,
            price: product.price,
            description: product.description,
            image: product.productImage[3] || "/VillaindesireBanner.webp", // Display the first image
            discount: null, // Adjust if discount is part of API response
            rating: null, // Adjust if rating is part of API response
          }} />
        ))}
       </div>
      </div>
      <Brands/>
      <About/>
    </div>
  );
};

export default Homepage;
