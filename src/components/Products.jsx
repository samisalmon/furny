import React from "react";
import s1 from "./src/img/s1.jpg";
import s2 from "./src/img/s2.jpg";
import s3 from "./src/img/s3.jpg";
import s4 from "./src/img/s4.jpg";

export default function Products() {
  return (
    <section
      id="products"
      className="max-w-6xl mx-auto py-20 px-4 flex flex-col gap-12 mt-12"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-6 drop-shadow-lg">
          Our Products
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Explore our wide range of furniture products, from cozy sofas to
          elegant dining sets. Each piece is crafted with quality and style in
          mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <img
          src={s1}
          alt="Product 1"
          className="w-full h-72 object-cover rounded-2xl shadow-xl"
        />
        <img
          src={s2}
          alt="Product 2"
          className="w-full h-72 object-cover rounded-2xl shadow-xl"
        />
        <img
          src={s3}
          alt="Product 3"
          className="w-full h-72 object-cover rounded-2xl shadow-xl"
        />
        <img
          src={s4}
          alt="Product 4"
          className="w-full h-72 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}

