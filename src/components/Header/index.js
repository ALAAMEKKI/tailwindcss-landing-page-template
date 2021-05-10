import React, {useState} from "react";
import Logo from "../../assets/12617116401607035667.svg";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
const [active, setActive] = useState(false)
const onClick = () => {
        setActive(!active)
}

  return (
    <header className="bg-gray-900 opacity-80 relative" >
        <div className=" max-w-7xl mx-auto flex text-gray-100 items-center justify-between p-2.5">
      <div className="w-14"> 
        <img  src={Logo} alt="" className="w-full cursor-pointer" href="/" />
      </div>

      <div onClick={onClick} className="md:hidden uppercase font-bold cursor-pointer">
          ||||
      </div>
      <nav className={
`${!active && 'hidden'}  absolute flex flex-col bg-gray-900  top-full  w-full left-0 z-20 md:static md:w-auto md:flex-row md:flex`
      }>
        <ul className="md:flex-row md:flex">
          <li className="list-none md:mr-5 ">
            <Link className="flex w-full text-base  hover:text-yellow-400 cursor-pointer pt-2.5 px-2.5">
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
