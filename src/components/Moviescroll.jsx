import React, { useState, useEffect } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

function Moviescroll() {
  const images = [img1, img2, img3]; // All your images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 1 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div className="relative w-screen h-[80vh] flex items-end overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="movie"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Overlay Text */}
      <div className="relative z-10 p-6 text-white bg-black/40 w-full">
        <h1 className="text-3xl font-bold">Movie Title</h1>
        <p className="text-lg">Some description here...</p>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Moviescroll;
