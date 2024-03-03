import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/JMR-logo.png";

const HeroSection = () => {
  return (
    <div className="flex gap-2 mt-9 flex-col items-center desktop:flex-row desktop:justify-center desktop:gap-10">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        src={logo}
        alt="JMR Enterprises"
        className="w-[240px] shadow-lg border rounded-md"
      />
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center desktop:font-semibold desktop:text-2xl">
        We're a leading Corporate Gifting and Custom Merchandise company
      </motion.p>
    </div>
  );
};

export default HeroSection;
