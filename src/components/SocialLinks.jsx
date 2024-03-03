import React from 'react'
import { CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";

const SocialLinks = ({color}) => {
  return (
    <div className={`flex w-fit mx-auto gap-2 text-xl ${color? color : "text-black"}`}>
        <a href='https://www.linkedin.com/company/jmr-enterprises08/' target='blank' className='p-2 rounded-full flex items-center justify-center desktop:cursor-pointer hover:text-yellow-500 hover:scale-[1.2] transition'>
            <CiLinkedin/>
        </a>
        <a href='https://www.instagram.com/jmr_enterprises_/' target='blank' className='p-2 rounded-full flex items-center justify-center desktop:cursor-pointer hover:text-yellow-500 hover:scale-[1.2] transition'>
            <CiInstagram/>
        </a>
        {/* <div  className='p-2 rounded-full flex items-center justify-center desktop:cursor-pointer hover:text-yellow-500 hover:scale-[1.2] transition'>
            <CiFacebook/>
        </div> */}
    </div>
  )
}

export default SocialLinks