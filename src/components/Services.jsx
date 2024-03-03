import React from "react";
import { motion } from "framer-motion";
import { TfiGift } from "react-icons/tfi";
import { MdKitchen } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { PiBagSimpleLight, PiNotePencilFill } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";

const services = [
  { id: 1, title: "Corporate Gifts", icon: <TfiGift /> },
  { id: 2, title: "Joining Kit", icon: <MdKitchen /> },
  { id: 3, title: "All types of Customized printing", icon: <IoMdPrint /> },
  { id: 4, title: "All types of Bags", icon: <PiBagSimpleLight /> },
  { id: 5, title: "Customized Diary", icon: <SlNotebook /> },
  { id: 6, title: "Customized Calendar", icon: <FaRegCalendarAlt /> },
  { id: 7, title: "Customized Note Pad", icon: <PiNotePencilFill /> },
];

const Services = () => {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-20 bg-black p-3 rounded-md">
      <p className="text-xl text-white mb-4 text-center">Services</p>
      <div className="flex flex-wrap gap-2 justify-center text-xs mb-3">
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
