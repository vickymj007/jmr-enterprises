import React from "react";
import { motion } from "framer-motion";
import { TfiGift } from "react-icons/tfi";
import { MdKitchen } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { PiBagSimpleLight } from "react-icons/pi";

const services = [
  { id: 1, title: "Corporate Gifts", icon: <TfiGift /> },
  { id: 2, title: "New Joinee Kit", icon: <MdKitchen /> },
  { id: 3, title: "All types of Customized printing", icon: <IoMdPrint /> },
  { id: 4, title: "Bags Manufacturing", icon: <PiBagSimpleLight /> },
];

const Services = () => {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-20 bg-black p-3 rounded-md">
      <p className="text-xl text-white mb-4 text-center">Services</p>
      <div className="flex flex-col gap-2 justify-center text-xs mb-3 desktop:flex-row desktop:flex-wrap">
        {services.map((service) => (
          <motion.p
            initial={{ opacity: 0, y: "50px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * service.id }}
            key={service.id}
            className="flex gap-1 justify-center whitespace-nowrap items-center bg-white rounded-md border py-1 px-3">
            <span>{service.icon}</span>
            {service.title}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
