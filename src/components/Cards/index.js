import React  , { useEffect } from "react";
import Photo from "../../assets/win5.jpg";
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import axios from "axios"

const Card = ({ ...otherProps }) => {

  const onClick =  async ()=> {
   
   const res = await axios.get("http://localhost:3001/createCharge")
   

   console.log('thischarge',res);
  
  }

  useEffect(() => {
    onClick()
    
  }, [])

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
      <CoinbaseCommerceButton className="bg-gray-700 text-base text-white rounded px-8 py-4" checkoutId={'d8642be6-37df-4ae6-8eaf-04c3e39130bc'}/>
      <a onClick={onClick}>
      <CoinbaseCommerceButton  className="bg-gray-700 text-base text-gray rounded px-8 py-4" checkoutId={'a1a069ad-ceba-4e95-9e80-890938280ab2'}/>
      </a>
      <div>
  <a 
  onClick={onClick} 
  className="buy-with-crypto"
     href="https://commerce.coinbase.com/checkout/a1a069ad-ceba-4e95-9e80-890938280ab2">
    Buy with Cryptossss
  </a>
  <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
  </script>
</div>
    </div>
  );
};

export default Card;
