import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CiHome, CiCircleInfo, CiPhone, CiShoppingCart } from "react-icons/ci";
import SideNavBtn from "./SideNavBtn";
import SideNav from "./SideNav";
import logo from "../assets/JMR.png";
import Footer from "./Footer";

const navItems = [
  { to: "/", text: "Home", icon: <CiHome /> },
  { to: "/about", text: "About", icon: <CiCircleInfo /> },
  // { to: "/products", text: "Products", icon: <CiShoppingCart /> },
  { to: "/contact", text: "Contact", icon: <CiPhone /> },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <AnimatePresence>
      <motion.nav
        className="w-full bg-white shadow fixed z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="max-w-[1200px] flex justify-between items-center mx-auto p-3">
          <motion.img
            className="w-10"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={logo}
          />
          <div className="desktop:flex desktop:gap-4 hidden text-sm">
            {navItems.map((item, i) => (
              <NavLink
                className="cursor-pointer px-2 hover:scale-[1.1] hover:text-yellow-400 transition"
                key={i}
                to={item.to}>
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 * i }}>
                  {item.text}
                </motion.span>
              </NavLink>
            ))}
          </div>

          {/* Sidenav Hamburger Menu */}
          <SideNavBtn openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </motion.nav>

      {/* SideNav Items */}
      <SideNav navItems={navItems} openNav={openNav} setOpenNav={setOpenNav} />

      <div className="w-full min-h-screen flex justify-center items-center bg-slate-50">
        <Outlet />
      </div>
      <Footer/>
    </AnimatePresence>
  );
};

export default Navbar;
