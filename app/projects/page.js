"use client";
import { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Projects() {
  const slides = ["/carousel/AfterBr.jpeg", "/carousel/AfterToilet.jpeg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 mx-auto max-w-[1400px]">
      <div className="gradient"></div>
      <h1 className="mb-4 text-4xl text-slate-950">Projects</h1>
      <p className="max-w-[1000px] text-lg text-neutral-700">
        Our team likes to take pride in our hard work and dedication to make
        your home look brand new. Here we would like to show a few of many
        restoration jobs we have done. Below you can see before and after
        pictures of our previous jobs!
      </p>
      <div className="max-w-[1400px] h-[973px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex justify-center py-2 top-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
