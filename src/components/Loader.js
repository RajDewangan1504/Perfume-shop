import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="relative scale-75">
      <div
        className="absolute z-10 top-16 left-48 w-12 h-3 bg-white"
        aria-hidden="true"
      ></div>
      <p
        className="relative text-6xl font-light tracking-wider m-0 whitespace-nowrap"
        aria-label="Loading"
      >
        <span
          className="inline-block relative text-black"
          aria-hidden="true"
        >
          L
          <span className="absolute top-6 left-0 w-3.5 h-9 bg-white transform-origin-[100%_0] animate-[lineStretch_1.8s_cubic-bezier(0.25,0.25,0.75,0.75)_infinite]"></span>
        </span>
        <span className="inline-block relative text-black">o</span>
        <span className="inline-block relative text-black">a</span>
        <span className="inline-block relative text-black">d</span>
        <span
          className="inline-block relative text-black"
          aria-hidden="true"
        >
          i
          <span className="absolute top-4 left-0.5 w-2 h-3.5 bg-white transform-origin-[100%_75%] animate-[letterStretch_1.8s_cubic-bezier(0.25,0.23,0.73,0.75)_infinite]"></span>
        </span>
        <span className="inline-block relative text-black">n</span>
        <span className="inline-block relative text-black">g</span>
      </p>
      <div
        className="absolute z-0 top-10 left-[28rem] w-1.5 h-1.5 bg-black rounded-full animate-[dotMove_1.8s_cubic-bezier(0.25,0.25,0.75,0.75)_infinite]"
        aria-hidden="true"
      ></div>
    </div>
  </div>
);

export default Loader;
