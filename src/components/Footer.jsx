import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black space-y-6 lg:space-y-0 lg:space-x-10 py-6 px-6 lg:px-10">
      <div className="w-full lg:w-[25%] flex justify-center lg:justify-start">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443033/20231018_180034_0000_bc75vr.png"
            alt="logo"
            className="w-[150px] lg:w-[223px] h-auto lg:h-[227px] rounded-lg"
          />
        </Link>
      </div>


      <div className="w-full lg:w-[25%] text-center lg:text-left">
        <h1 className="font-medium text-2xl text-[#954F32] leading-normal pb-4">
          Office Address
        </h1>
        <p className="font-normal text-lg text-[#A4A4A4]">
          No 6, Idera Street, Oworonshoki, Lagos State, Nigeria
        </p>
        <div className="flex justify-center lg:justify-start items-center pt-8">
          <img src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443074/Vector_2_ejf343.png" alt="gmail logo" />
          <p className="text-[#A4A4A4] pl-2">unitelanguagess@gmail.com</p>
        </div>
        <div className="flex justify-center lg:justify-start items-center pt-4">
          <img src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443085/Vector_3_gds9o7.png" alt="phone icon" />
          <p className="text-[#A4A4A4] pl-2">07085544385, 08055278040</p>
        </div>
      </div>

    
      <div className="w-full lg:w-[25%] text-center lg:text-left">
        <h1 className="font-medium text-2xl text-[#954F32] pb-4">Sitemap</h1>
        <div className="text-[#A4A4A4] flex flex-col space-y-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/sign in">Sign in</Link>
        </div>
      </div>

      
      <div className="w-full lg:w-[25%] flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="flex w-full border-[#FDA269] pb-4">
          <input
            type="email"
            placeholder="Type your email address"
            className="bg-[#D9D9D9] px-4 lg:px-10 py-2 flex-1 rounded-l-md"
          />
          <button className="bg-[#954F32] text-white px-4 py-2 rounded-r-md">
            Submit
          </button>
        </div>
        <p className="text-[#A4A4A4] mt-2">Get updates from us</p>
        <div className="flex space-x-6 mt-6">
          <img src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443047/Facebook_xcrpkk.png" alt="fb logo" className="w-6 h-6" loading="lazy" />
          <img src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443069/Twitter_xfir2b.png" className="w-6 h-6" alt="twitter logo" loading="lazy" />
          <img src="https://res.cloudinary.com/dqyvf0nay/image/upload/v1736443050/Instagram_jkqnfc.png" alt="instagram logo" className="w-6 h-6" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
