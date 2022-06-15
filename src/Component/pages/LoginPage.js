import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";
import login from '../../Assets/login.png';
import logo from '../../Assets/logo.svg';
import google from '../../Assets/google.svg';

function LoginPage() {


  return (
    <>
    <div className= 'p-28 items-center'>
      <Navbar />
      <div className='flex items-center mx-auto md:flex-row'>
      <div class="hidden md:block">
      <img src={login} alt="logo" className="w-96" />
      </div>
      <div className=" border-slate-200 rounded-xl mx-auto shadow-md p-12 w-96 sm:w-86 h-auto">
        <form className="text-sm max-w-[400px] h-full">
            <img src={logo} alt="logo" className="w-32 mx-auto mb-5" />
            <label for="email">
                <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5 after:text-pink-500">Email</span>
                <input placeholder="nama@mail.com" id="email" 
                  className='w-full block border rounded border-orange-400 bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer' 
                  type="email" 
                />
                <p className="mb-1 text-sm text-pink-700 invisible peer-invalid:visible">Email tidak valid</p>
            </label>
            <label for="password">
              <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5 after:text-pink-500">Password</span>
              <input placeholder="********" id="password" 
                  className='w-full block border rounded border-orange-400 bg-gray-100 p-2 mb-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700' 
                  type="password" 
              />
            </label>
                
            <p className='text-right mt-2'><Link to="/" className="text-pink-700">Lupa Password ?</Link></p>
            <button className='w-full py-3 mt-8 bg-orange-500 hover:bg-orange-600 relative text-white'>Masuk</button>           
            <p className='text-center mt-4'>Belum Punya Account ? <Link to="/" className="font-bold">Daftar</Link></p>

            <div className="flex flex-row justify-center">
              <div ></div>
            </div>
            <button class="py-3 px-3 mt-8 mb-4 w-full justify-center rounded-2xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 flex">
              <div class="flex gap-4 justify-center max-w-sm ">
                <img src={google} class="w-5 " alt="google" />
                <span class="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
              </div>
            </button>
        </form>
        </div>
    </div>
    
    </div>
    <Footer />
    </>
  )
}

export default LoginPage;