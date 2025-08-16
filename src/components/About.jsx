import React from "react";
import aboutImg from "./src/img/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12 mt-12"
    >
      <img
        src={aboutImg}
        alt="About Furny"
        className="w-full md:w-2/3 h-96 object-cover rounded-2xl shadow-xl"
      />
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-6 drop-shadow-lg">
          About Furny
        </h2>
        <p className="text-xl md:text-2xl text-gray-700">
          Furny is dedicated to bringing you the finest in modern furniture
          design. Our curated collections blend comfort, style, and
          sustainability, making your home a true reflection of you.
        </p>
      </div>
    </section>
  );
}

