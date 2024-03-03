import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="max-w-[1200px] w-full p-8"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100vw", opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <motion.h1
          className="text-2xl text-center font-semibold mb-5 text-yellow-500"
          initial={{ y: "-200" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}>
          Corporate Gifting
        </motion.h1>
        <div className="flex flex-col gap-6 text-center text-xs desktop:text-sm">
          <motion.section
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}>
            “<strong>JMR Enterpeises</strong>”is a platform to explore Gifts for
            any occasions in your corporate life. We give plenty of options
            suiting your budget and most importantly, we will be able to totally
            customize as per your requirements.
          </motion.section>
          <motion.section
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}>
            If you are exploring gifts for your stakeholders and loved & dear
            ones, your brilliant employees, loyal customers, worthy suppliers &
            partners then you are at the right place!
          </motion.section>
          <motion.section
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}>
            All you need to do is brief us about their interests, favourites,
            hobbies etc and we will customize gifts for you to make sure they
            will be mesmerized & have a long-lasting impression in their life.
          </motion.section>
          <motion.footer
            className="bg-yellow-500 p-5 rounded-lg"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}>
            Please contact us on <strong>8825703698 / 8939508410</strong> for
            bulk order enquiries...
          </motion.footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
