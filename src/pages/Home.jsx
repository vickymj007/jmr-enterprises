import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Specialization from "../components/Specialization";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div className="max-w-[1200px] w-full p-8">
        <HeroSection />
        <Services />
        <Specialization/>
        <FeaturedProducts/>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
