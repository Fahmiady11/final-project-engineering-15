import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import icon from '../../Assets/bars-solid.svg';
import iconX from '../../Assets/x.svg';

function Navbar() {
  const Links = [
    { name: 'ForumIn', link: '/' },
    { name: 'BlogIn', link: '/' },
    { name: 'Tentang', link: '/' },
    { name: 'FaQ', link: '/' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 border-b-2  border-orange-400">
        <div className="md:flex items-center justify-between py-4 px-4 bg-white">
          <div className="cursor-pointer flex items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="w-32" />
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 border-2 px-2 py-1 border-black rounded-lg cursor-pointer md:hidden bg-orange-400 hover:bg-orange-600"
          >
            {open ? (
              <img src={iconX} alt="icon" className="w-6 py-1" />
            ) : (
              <img src={icon} alt="icon" className="w-6 py-0.5" />
            )}
          </div>

          <ul
            className={`md:flex md:items-center mx-auto top-2 -z-10 md:z-10 bg-orange-500  md:bg-white  md:pb-0 right-2 left-2 absolute md:static w-9/12 md:w-auto md:pl-0 transition-all duration-500 ease-in rounded-lg ${
              open ? 'top-20 ' : 'top-[-490px]'
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 text-center"
              >
                <Link
                  to={link.link}
                  className="text-gray-800 cursor-pointer  hover:text-white md:hover:text-orange-500 duration-500 font-poppins font-bold md:text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex md:items-center md:justify-between md:gap-3 md:mr-5">
            <button className="px-4 py-2 bg-white rounded-md border-orange-500 border-2 text-orange-500 font-bold hover:bg-orange-700 hover:text-white hover:border-black">
              Register
            </button>
            <button className="px-4 py-2 bg-orange-500 rounded-md border-black border-2 text-white font-bold hover:bg-orange-700 hover:text-white hover:border-orange-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
