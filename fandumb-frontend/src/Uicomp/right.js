// SideNav.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Right = () => {
  return (
    <div className="bg-black h-full w-full flex flex-col justify-between">
      {/* Top-right corner: Login and Sign Up */}
      <div className="flex justify-end items-start p-6">
        <div className="flex space-x-8">
          <a href="#" className="text-white text-lg">LOGIN</a>
          <a href="#" className="text-white text-lg">SIGN UP</a>
        </div>
      </div>

       {/* Mobile screen with video */}
       <div className="flex justify-center items-center">
        
      </div>

      {/* Bottom-centered: "its HERE" */}
      <div className="flex justify-center items-end p-8">
        <h1 className="text-6xl font-black text-white">
          <span className="block">its HERE</span>
        </h1>
      </div>
    </div>
  );
};

export default Right;
