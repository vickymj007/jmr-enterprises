import React from "react";
import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";

const specialization = [
  {
    title: "Fast",
    id: 1,
    icon: <AiFillThunderbolt />,
    desc: "We are commited to doing everything faster than ever.",
  },
  {
    title: "Easy",
    id: 2,
    icon: <FaHandshakeSimple />,
    desc: "Always striving to make life easier for out customers.",
  },
  {
    title: "Customized",
    id: 3,
    icon: <TiSpanner />,
    desc: "Not just our Products, Even our approach is just how you need it.",
  },
];

const Specialization = () => {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 bg-white rounded-md border shadow-md p-3 flex flex-col gap-3">
      <h1 className="font-bold text-xl text-center">We are Specialized in</h1>
      <div className="flex flex-col gap-3 desktop:flex-row">
      {specialization.map((item) => (
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          key={item.id}
          className="bg-yellow-500 p-3 rounded text-black">
          <h1 className="font-semibold text-lg flex gap-1 items-center">
            <span>{item.icon}</span>
            {item.title}
          </h1>
          <p className="  text-xs">{item.desc}</p>
        </motion.div>
      ))}
      </div>
    </motion.div>
  );
};

export default Specialization;
