import React from "react";
import heroImg from "./src/img/hero.jpg";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row-reverse items-center gap-12">
      <img
        src={heroImg}
        alt="Modern furniture hero"
        className="w-full md:w-2/3 h-96 object-cover rounded-2xl shadow-xl"
      />
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-6 drop-shadow-lg">
          Discover Comfort & Style
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Premium furniture for every space
        </p>
        <a
          href="#products"
          className="bg-yellow-500 text-white px-8 py-3 rounded-full shadow hover:bg-yellow-600 transition font-semibold"
        >
          Shop Collections
        </a>
      </div>
    </section>
  );
}

