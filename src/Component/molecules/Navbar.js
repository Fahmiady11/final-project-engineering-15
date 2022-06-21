import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import icon from '../../Assets/bars-solid.svg';
import iconX from '../../Assets/x.svg';
import gambar from '../../Assets/fotoProfil.jpg';
import Swal from 'sweetalert2';
import useAuthStore from '../store/AuthStore';

function Navbar() {
  const [open, setOpen] = useState(false);
  //eslint-disable-next-line
  const { isLoggedIn, setIsLoggedIn, setUser } = useAuthStore()
  let key = window.localStorage.getItem("key")
  const navigate = useNavigate();


  let activeStyle = {
    color: '#0A5D31',
  };
  const Links = [
    { name: 'ForumIn', link: '/forumin' },
    { name: 'BlogIn', link: '/blogin' },
    { name: 'Tentang', link: '/aboutpage' },
    { name: 'FaQ', link: '/faqpage' },
  ];

  const handleLogout = () => {
    console.log("test")
    setIsLoggedIn(false)
    setUser({})
    window.localStorage.removeItem("key")
    Swal.fire('Berhasil!', 'Anda Telah Berhasil Logout!', 'success').then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    })

  }
  return (
    <>
      <div className="shadow-lg w-full fixed top-0 left-0 border-b-2  border-orange-400 z-50">
        <div className="md:flex items-center justify-between py-4 px-4 bg-[#f2f2f2]">
          <div className="cursor-pointer flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-32 ml-5 md:ml-0 drop-shadow-md"
              />
            </Link>
            <ul
              className={`md:flex  border-2 md:border-0 md:shadow-none border-gray-300 md:border-none shadow-md md:items-center mx-auto top-2 -z-10 md:z-10 bg-orange-500  md:bg-[#f2f2f2]  md:pb-0 right-2 left-2 absolute md:static w-9/12 md:w-auto md:pl-0 transition-all duration-500 ease-in rounded-lg ${open ? 'top-20 ' : 'top-[-490px]'
                }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="drop-shadow-lg md:ml-8 text-xl md:my-0 my-4 text-center"
                >
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to={link.link}
                    className="text-black cursor-pointer text-sm md:text-md hover:text-white md:hover:text-orange-500 duration-500 font-poppins font-bold md:text-base"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {isLoggedIn || key ? (
                <div className="flex mb-8 flex-col gap-6 items-center mx-auto md:hidden">
                  <button onClick={() => handleLogout()} className="px-4 py-1.5 w-2/3 bg-white rounded-3xl border-orange-500 border-2 text-orange-500 font-bold hover:bg-orange-600 hover:text-white hover:border-neutral-700">
                    Logout
                  </button>
                  <div>
                    <Link to="/profilepage">
                      <img
                        className="w-10 h-10 object-cover border-2 border-white rounded-full shadow-md"
                        src={gambar}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex mb-8 flex-col gap-6 items-center mx-auto md:hidden">
                  <button className="px-6 py-1.5 w-2/3 bg-orange-500 rounded-3xl border-neutral-700 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
                    <Link to="/registerpage">
                      Register
                    </Link>
                  </button>


                  <button className="px-4 py-1.5 w-2/3 bg-white rounded-3xl border-orange-500 border-2 text-orange-500 font-bold hover:bg-orange-600 hover:text-white hover:border-neutral-700">
                    <Link to="/loginpage">
                      Login
                    </Link>
                  </button>
                </div>
              )}
            </ul>
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
          {isLoggedIn || key ? (
            <div className="hidden md:flex md:items-center md:justify-between md:gap-3 md:mr-5">
              <button onClick={() => handleLogout()} className="px-6 shadow-md py-1.5 bg-orange-500 rounded-md border-orange-500 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
                Logout
              </button>
              <div>
                <Link to="/profilepage">
                  <img
                    className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
                    src={gambar}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center md:justify-between md:gap-3 md:mr-5">
              <button className="px-4 shadow-md py-1.5 bg-white rounded-md border-orange-500 border-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white hover:border-orange-500">
                <Link to="/registerpage">
                  Register
                </Link>
              </button>
              <button className="px-6 shadow-md py-1.5 bg-orange-500 rounded-md border-orange-500 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
                <Link to="/loginpage">
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </div >
    </>
  );
}

export default Navbar;
