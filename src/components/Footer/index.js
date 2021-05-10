import React from "react";

const Footer = ({ ...otherProps }) => {
  return (
    <footer className="bg-black opacity-80 ">
      <div className="w-full max-w-7xl mx-auto px-2.5 py-14">
        <span className="text-base uppercase text-white">Copyright © 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
