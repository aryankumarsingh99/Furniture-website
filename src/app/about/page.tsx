import { IoMdContacts } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div>
        <div className=" container mx-auto p-7 flex justify-center bg-[#3B5D50] text-white">
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
            <h1 className="text-6xl font-bold pl-20 text-white">About Us</h1>
            <p className="pt-10 pl-20 opacity-50">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <img
            className=" pt-10 pr-10 "
            src="https://themewagon.github.io/furni/images/couch.png"
            alt=""
          />
        </div>
      </div>











       <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>Welcome to Our Furniture Store</h1>
        <p>Explore our wide range of furniture and home decor.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>Shop Now</h1>
        <p>Discover the best deals on furniture and home accessories.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-300 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to our customer service team.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-400 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>Follow Us</h1>
        <p>Stay updated with our latest collections and offers.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-500 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>About Us</h1>
        <p>Learn more about our story and values.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-600 h-screen">
      <div className="text-2xl text-gray-800">
        <h1>Testimonials</h1>
        <p>See what our customers are saying about us.</p>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gray-700 h-screen">
      <div className="text-2xl text-gray-800">    
        <h1>FAQs</h1>
        <p>Frequently Asked Questions</p>
      </div>
    </div> 
    </>
  );
}
