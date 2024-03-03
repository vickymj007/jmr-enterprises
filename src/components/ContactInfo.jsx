import React from "react";
import { motion } from "framer-motion";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div>
      {/* <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-semibold text-center mb-5">
        Contact us
      </motion.h1>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <div className="flex">
          <motion.div
            className="bg-yellow-500 w-fit min-h-[180px] p-4 rounded-lg flex flex-col justify-between text-white text-xl"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <motion.span
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}>
              <IoLocationSharp />
            </motion.span>
            <motion.span
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}>
              <MdLocalPhone />
            </motion.span>
            <motion.span
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}>
              <IoMail />
            </motion.span>
          </motion.div>
          <div className="flex flex-col justify-between p-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-[-8px]">
              No: 21, Annai Indhra Gandhi street, Sholinganallur, Chennai
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-[-10px]">
              +91-8825703698
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}>
              jmrenterprises746@gmail.com
            </motion.p>
          </div>
        </div>
      </motion.div> */}
      <div className="text-gray-500 mt-6">
          <p className="font-semibold">Contact Info</p>
          <div className="grid grid-cols-5 grid-rows-3 max-w-[340px]">
            <div className="text-xl flex justify-center items-center">
              <span className="border border-gray-500 p-3 rounded-full"><IoLocationSharp /></span>
            </div>
            <div className="p-3 col-span-4 flex items-center">
              <div>
              <p className="font-semibold">Address:</p>
              <p className="text-xs">No: 21, Annai Indhra Gandhi street, Sholinganallur, Chennai-600119</p>
              </div>
            </div>
            <div className="text-xl flex justify-center items-center">
              <span className="border border-gray-500 p-3 rounded-full"><MdLocalPhone /></span>
            </div>
            <div className="p-3 col-span-4 flex items-center">
              <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-xs">+91-8825703698</p>
              </div>
            </div>
            <div className="text-xl flex justify-center items-center">
              <span className="border border-gray-500 p-3 rounded-full"><IoMail /></span>
            </div>
            <div className="p-3 col-span-4 flex items-center">
              <div>
              <p className="font-semibold">Email:</p>
              <p className="text-xs">jmrenterprises746@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default ContactInfo;
