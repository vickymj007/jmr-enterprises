import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";

const products = [
  // {id:1,name:"Pen & Key Chain Mini-Kit",price:"",image:product1},
  { id: 2, name: "New Joinee Kit", price: "", image: product2 },
  { id: 3, name: "New Joinee Kit with Speakers", price: "", image: product3 },
];

const FeaturedProducts = () => {
  return (
    <div className="mt-20">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="text-center font-bold text-xl mb-5">
        Featured Products
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-3">
        {products.map((product) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            key={product.id}
            className=" w-[220px] rounded shadow border overflow-hidden">
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                className="h-[180px] object-cover"
              />
            </div>
            <div className="p-3 text-center text-sm flex flex-col">
              <p>{product.name}</p>
              <p className="text-xs bg-gray-800 rounded text-white py-1 mt-3">
                Contact us for Price Info
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
