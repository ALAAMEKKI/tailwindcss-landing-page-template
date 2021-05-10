import React from "react";
import Photo from "../../assets/win5.jpg";

const Card = ({ ...otherProps }) => {
  return (
    <div className="flex flex-row flex-wrap py-14 jsutify-center">
      <div className="w-full lg:w-3/6 xl:w-4/12   px-2.5 mb-5">
        <div className="bg-black    ">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-white text-base">Title</span>
              </li>
              <li className="list-none">
                <span className="text-base text-white">Description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={Photo}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;