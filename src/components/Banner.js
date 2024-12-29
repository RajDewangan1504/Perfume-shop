import React from "react";
import Slider from "react-slick"; // Ensure you have react-slick installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  // Enable arrows for next and previous
    fade: true,
    adaptiveHeight: true,
    prevArrow: (
      <button className="slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full opacity-80 hover:opacity-100 shadow-lg border-2 border-white">
        &#8592;
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full opacity-80 hover:opacity-100 shadow-lg border-2 border-white">
        &#8594;
      </button>
    ),
  };
  

  return (
    <div className="mx-auto relative pt-20 w-[90%] text-white">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative flex">
          <img
            className="w-full h-64 object-cover rounded-xl transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+1"
            alt="Perfume 1"
          />
          <div className="absolute inset-0 flex flex-col bg-frame bg-cover p-6 text-right from-black to-transparent bg-opacity-50 rounded-xl">
            <h3 className="text-3xl font-semibold mb-3">Chanel No. 5</h3>
            <p className="text-lg mb-4">
              A timeless fragrance that embodies elegance and femininity.
            </p>
            <div className="flex justify-end mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm ml-2">(200 reviews)</span>
            </div>
            <p className="text-xl font-bold mb-5">$120.00</p>
            <div className="flex justify-end gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 transition">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex">
          <img
            className="w-full h-64 object-cover rounded-xl transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+2"
            alt="Perfume 2"
          />
          <div className="absolute inset-0 flex flex-col bg-frame bg-cover p-6 text-right from-black to-transparent bg-opacity-50 rounded-xl">
            <h3 className="text-3xl font-semibold mb-3">Dior Sauvage</h3>
            <p className="text-lg mb-4">
              A bold and spicy fragrance for the modern man who defines his own path.
            </p>
            <div className="flex justify-end mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm ml-2">(300 reviews)</span>
            </div>
            <p className="text-xl font-bold mb-5">$150.00</p>
            <div className="flex justify-end gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 transition">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative flex">
          <img
            className="w-full h-64 object-cover rounded-xl transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+3"
            alt="Perfume 3"
          />
          <div className="absolute inset-0 flex flex-col bg-frame bg-cover p-6 text-right from-black to-transparent bg-opacity-50 rounded-xl">
            <h3 className="text-3xl font-semibold mb-3">Tom Ford Black Orchid</h3>
            <p className="text-lg mb-4">
              A rich and luxurious fragrance that exudes sophistication.
            </p>
            <div className="flex justify-end mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm ml-2">(150 reviews)</span>
            </div>
            <p className="text-xl font-bold mb-5">$180.00</p>
            <div className="flex justify-end gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 transition">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative flex justify-start">
          <img
            className="w-full h-64 object-cover rounded-xl transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+4"
            alt="Perfume 4"
          />
          <div className="absolute inset-0 flex flex-col bg-frame bg-cover p-6  from-black to-transparent bg-opacity-50 rounded-xl">
            <h3 className="text-3xl font-semibold mb-3">Gucci Bloom</h3>
            <p className="text-lg mb-4">
              A delicate floral fragrance that celebrates the strength of women.
            </p>
            <div className="flex justify-start mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm ml-2">(100 reviews)</span>
            </div>
            <p className="text-xl font-bold mb-5">$95.00</p>
            <div className="flex justify-start gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
