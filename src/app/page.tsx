import { IoMdContacts } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className=" container mx-auto p-7 flex justify-center md:justify-end pr-28 bg-[#3B5D50] text-white">
          <ul className="flex space-x-10 ">
            <li>
              <Link className="hover:text-yellow-400" href="/">
                Home
              </Link>
            </li>
           <li>
              <Link className="hover:text-yellow-400" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400" href="/about">
                About us
              </Link>
            </li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>

            <li>
              <IoMdContacts className="text-3xl" />
            </li>
            <li>
              <AiOutlineShoppingCart className="text-3xl" />
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center h-134 bg-[#3B5D50] text-white p-4 ">
          <div>
            <h1 className="text-6xl font-bold pl-20 text-white">
              Modern Interior Design Studio
            </h1>
            <p className="pt-10 pl-20 opacity-50">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="pl-20 pt-5 gap-2 flex">
              <button className="mt-4 bg-yellow-400 rounded-4xl text-black  py-3 px-7 hover:bg-yellow-500">Shop Now</button>
              <button className="mt-4 border rounded-4xl border-gray-400 text-white  py-3 px-7 hover:border-white ">Explore</button>
            </div>
          </div>
          <img
            className=" pt-10 pr-10 hover:scale-105 transition-transform duration-300"
            src="https://themewagon.github.io/furni/images/couch.png"
            alt=""
          />
        </div>
      </div>




    <div className="flex justify-center items-center flex-wrap h-screen">

      <div>
        <h1 className="text-3xl">Crafted with excellent material.</h1>
        <p className="pt-4 text-gray-500 flex  ">Donec vitae odio quis ni utate velit imperdiet dolor tempor tristique.</p>
        <div className="pt-5">
          <button className="mt-4 bg-[#342c24] text-white py-3 px-7 bold  rounded-4xl hover:bg-[#3B5D50]">Explore</button>
        </div>
      </div >
      <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
        <img className="w-80 h-80 object-cover" src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
        <h1>Nordic Chair</h1>
        <p className="pt-4 text-2xl font-semibol font-bold">$50.00</p>
      </div>
      <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ">
        <img className="w-80 h-80 object-cover" src="https://themewagon.github.io/furni/images/product-2.png" alt="" />
        <h1>Modern Sofa</h1>
        <p className="pt-4 text-2xl font-semibol font-bold">$75.00</p>
      </div>
      <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ">
        <img className="w-80 h-80 object-cover" src="https://themewagon.github.io/furni/images/product-3.png" alt="" />
        <h1 className="">Stylish Coffee Table</h1>
        <p className="pt-4 text-2xl font-semibol font-bold">$100.00</p>
      </div>
      
    </div>

    </>
  );
}
