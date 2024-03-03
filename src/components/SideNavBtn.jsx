import React from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const SideNavBtn = ({ openNav, setOpenNav }) => {
  return (
    <div 
    className="desktop:hidden p-1">
      {openNav ? (
        <span
          >
          <MdClose onClick={() => setOpenNav(false)} className="text-2xl" />
        </span>
      ) : (
        <span>
          <RxHamburgerMenu
            onClick={() => setOpenNav(true)}
            className="text-2xl"
          />
        </span>
      )}
    </div>
  );
};

export default SideNavBtn;
