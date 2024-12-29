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
    arrows: true, // Enable arrows for next and previous
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
    <div className="mx-auto relative mt-1 w-full text-white border-none">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative flex">
          <img
            className="w-full h-64 sm:h-80 md:h-96 object-cover  transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+1"
            alt="Perfume 1"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-frame bg-cover p-6 text-right sm:text-left from-black to-transparent bg-opacity-50 ">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Chanel No. 5</h3>
            <p className="text-sm sm:text-lg mb-4">
              A timeless fragrance that embodies elegance and femininity.
            </p>
            <div className="flex justify-end sm:justify-start mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-xs sm:text-sm ml-2">(200 reviews)</span>
            </div>
            <p className="text-lg sm:text-xl font-bold mb-5">$120.00</p>
            <div className="flex justify-end sm:justify-start gap-2 sm:gap-4">
              <button className=" ml-2 px-4 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 ">
                Add to Cart
              </button>
              <button className=" ml-2 px-4 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 ">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Add similar updates for Slide 2, Slide 3, and Slide 4 */}
        {/* Slide 2 */}
        <div className="relative flex">
          <img
            className="w-full h-64 sm:h-80 md:h-96 object-cover  transform transition duration-300 hover:scale-105"
            src="https://via.placeholder.com/800x400?text=Perfume+2"
            alt="Perfume 2"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-frame2 bg-cover p-6 text-right sm:text-left from-black to-transparent bg-opacity-50 ">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Dior Sauvage</h3>
            <p className="text-sm sm:text-lg mb-4">
              A bold and spicy fragrance for the modern man who defines his own path.
            </p>
            <div className="flex justify-end sm:justify-start mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-xs sm:text-sm ml-2">(300 reviews)</span>
            </div>
            <p className="text-lg sm:text-xl font-bold mb-5">$150.00</p>
            <div className="flex justify-end sm:justify-start gap-2 sm:gap-4">
              

              <button className="  ml-2 px-4 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 ">
                Add to Cart
              </button>
              <button className="  ml-2 px-4 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 ">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Add other slides with similar responsive settings */}
      </Slider>
    </div>
  );
}
