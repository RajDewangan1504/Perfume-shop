import React from "react";

const Banner = () => (
  <div className="bg-cover bg-center h-[calc(100vh-3rem)] bg-gray-700 flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("/banner-image.jpg")' }}>
    <h1 className="text-4xl font-bold text-center">Discover Your Signature Scent</h1>
    <button className="mt-4 bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded">Shop Now</button>
  </div>
);

export default Banner;