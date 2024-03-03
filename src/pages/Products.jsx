import React from 'react'
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div 
      className='max-w-[1200px] bg-slate-200 w-full h-[400px] mt-20'
      initial={{x:"100vw",opacity:0}}
      animate={{x:0,opacity:1}}
      exit={{x:"-100vw",opacity:0}}
      transition={{duration:0.2}}
    >
      Products
    </motion.div>
  )
}

export default Products