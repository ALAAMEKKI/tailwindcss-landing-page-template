import React, { useState } from "react";
import Logo from "../../assets/12617116401607035667.svg";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-gray-900 opacity-80 relative py-3">
      <div className=" max-w-7xl mx-auto flex text-gray-100 items-center justify-between p-2.5">
        <div className="w-14 cursor-pointer">
          {/* <img  src={Logo} alt="" className="w-full inline cursor-pointer" href="/" /> */}
          <h1
            className="inline w-8 h-16 text-yellow-400 text-4xl font-black"
            viewBox="0 0 32 32"
          >
            20
          </h1>
          <h3 className="inline font-bold text-4xl w-8 my-16">X</h3>
          <p className="inline font-extralight">scripts</p>
        </div>

        <div
          onClick={onClick}
          className="md:hidden uppercase font-bold cursor-pointer"
        >
          ||||||
        </div>
        <nav
          className={`${
            !active && "hidden"
          }  absolute flex flex-col bg-gray-900  top-full  w-full left-0 z-20 md:static md:w-auto md:flex-row md:flex`}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5 ">
              <Link className="flex w-full text-base font-bold text-yellow-400 hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">
                Home
              </Link>
            </li>
            <li className="list-none md:mr-5 ">
              <Link className="flex w-full text-base  hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">
                Signup
              </Link>
            </li>
            <li className="list-none md:mr-5 ">
              <Link className="flex w-full text-base  hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">
                Signin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
