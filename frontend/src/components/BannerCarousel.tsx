import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../images/bannercarousel/1.jpg";
import img2 from "../images/bannercarousel/2.jpg";
import img4 from "../images/bannercarousel/4.jpg";

const images = [img1, img2, img4];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleMouseDown = (e: React.MouseEvent) => setDragStart(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStart !== null) {
      const delta = e.clientX - dragStart;
      if (delta > 50) prevSlide();
      else if (delta < -50) nextSlide();
    }
    setDragStart(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden select-none group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-screen flex-shrink-0">
            <img
              src={img}
              alt={`banner-${i}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 
                   bg-blue-500 text-white p-2 rounded-full shadow 
                   opacity-0 group-hover:opacity-90 transition-opacity duration-300"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 
                   bg-blue-500 text-white p-2 rounded-full shadow 
                   opacity-0 group-hover:opacity-90 transition-opacity duration-300"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition transform ${
              index === i
                ? "bg-blue-500 opacity-100 scale-125"
                : "bg-white opacity-40 hover:opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
