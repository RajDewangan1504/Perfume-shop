import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams(); // Get product id from URL params
  
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
    }
    // Add more products as needed
  ];

  // Convert the id from string to number for comparison
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}</p>
      <p>Rating: {product.rating}</p>
      <h3>Features:</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
