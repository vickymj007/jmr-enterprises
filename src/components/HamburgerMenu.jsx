import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  return (
    <div className="w-8 h-8 bg-slate-200 rounded-full relative">
      <motion.span
        className="w-6 h-[2px] bg-black absolute"
        style={{
          top: "35%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.span
        className="w-6 h-[2px] bg-black absolute"
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.span
        className="w-6 h-[2px] bg-black absolute"
        style={{
          bottom: "35%",
          left: "50%",
          x: "-50%",
          y: "50%",
        }}
      />
    </div>
  );
};

export default HamburgerMenu;
