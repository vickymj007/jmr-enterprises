import React from "react";
import SocialLinks from "./SocialLinks";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto p-4">
        <SocialLinks color="text-gray-500"/>
        <ContactInfo/>
      </div>
    </div>
  );
};

export default Footer;
