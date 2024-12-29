import React from "react";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";


const Homepage = () => {
  const products = [
    {
      id: 1,
      name: "HP Victus Gaming Laptop",
      price: 899.00,
      originalPrice: 1000.00,
      discount: "10%",
      rating: 4.5,
      description: "Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050)",
      features: [
        "Core i5 Processor (12th Gen)",
        "8 GB DDR4 RAM",
        "Windows 11 Home",
        "512 GB SSD"
      ],
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/8/k/15-fa1226tx-gaming-laptop-hp-original-imah4bjbx8ctzdg6.jpeg"
    },
    {
      id: 2,
      name: "HP Victus Gaming Laptop by raj",
      price: 400.00,
      originalPrice: 100.00,
      discount: "10%",
      rating: 4.5,
      description: "Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050)",
      features: [
        "Core i5 Processor (12th Gen)",
        "8 GB DDR4 RAM",
        "Windows 11 Home",
        "512 GB SSD"
      ],
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjvnCZv8_0F7tZL_Flg-Cqf85vOedVmfpMVT3WaKkkQH4biq_k-ofPOVTq_x7_EuEmNI6COwkZXoovckdP1mJDqQ5jKXjWmuOXi9ppueQVF0N0-RM_f69P"
    }
    // Add more products as needed
  ];

  return (
    <div className="w-full">
      <Banner className="w-full h-full"/>
      <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> 
    </div>
  );
};

export default Homepage;