import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-white flex flex-col justify-center gap-4 max-w-[500px] w-full shadow-lg p-4 rounded-lg border">
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center">
        <h1 className="text-xl font-semibold ">Any Enquries?</h1>
        <p className="text-xs text-slate-500">Please feel free to write us.</p>
      </motion.div>
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        type="text"
        placeholder="Name"
        className="input-primary"
      />
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        type="text"
        placeholder="Email"
        className="input-primary"
      />
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        type="tel"
        placeholder="Mobile Number"
        className="input-primary"
      />
      <motion.textarea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        type="text"
        placeholder="Message"
        className="input-primary"
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="bg-black w-fit mx-auto text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 hover:scale-[1.1] transition">
        Submit
      </motion.button>
      <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}>
        <SocialLinks/>
      </motion.span>
    </motion.form>
  );
};

export default ContactForm;
