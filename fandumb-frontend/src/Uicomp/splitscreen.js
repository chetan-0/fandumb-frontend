// SplitScreenLayout.js
import React from 'react';
import Left from './left';
import Right from './right';

const SplitScreenLayout = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      {/* Left Side: Gray Section */}
      <Left />
      
      {/* Right Side: Black Section with Login and Sign Up */}
      <Right />
    </div>
  );
};

export default SplitScreenLayout;
