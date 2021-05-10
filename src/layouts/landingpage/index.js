import React from "react";
import Header from "../../components/Header/index";
import Dice from "../../assets/win3.jpg";

export default function LandingPageLayout({ heading, ...otherProps }) {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col">
        <Header />
      </div>

      <div
        className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${Dice})`,
        }}
      ></div>
    
    {heading && <h1 className="relative px-2.5 test-white uppercase z-10 text-xl text-center md:text-6xl">


    </h1>}



    </div>
  );
}

heading.defaultProps = {
  heading: "",
};
