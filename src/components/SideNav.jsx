import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideNav = ({ navItems, openNav, setOpenNav }) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => setOpenNav(false)}
        className={`fixed  ${!openNav && "scale-[0]"} transition z-10`}
        style={{
          top: "60px",
          right:"5px"
        }}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={`bg-black text-white border rounded-md shadow-md flex flex-col w-[180px] h-full ml-auto`}>
          {navItems.map((item, i) => (
            <Link
              onClick={() => setOpenNav(false)}
              className="px-4 py-3 flex items-center gap-3"
              key={i}
              to={item.to}>
              {item.icon}
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 * i }}>
                {item.text}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SideNav;
