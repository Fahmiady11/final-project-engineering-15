import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import loginImage from '../../Assets/login.png';
import logo from '../../Assets/logo.svg';
import google from '../../Assets/google.svg';
import axios from 'axios';
import Swal from 'sweetalert2';
import validator from 'validator';
import useAuthStore from "../store/AuthStore";

const LoginPage = () => {
  const baseUrl = 'https://be.codein.studio/auth/login';
  const [login, setLogin] = useState({ email: '', password: '' });
  const [state, setState] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  //eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [emailError, setEmailError] = useState({ message: '', status: false });
  const { setUser, setIsLoggedIn } = useAuthStore()

  const handleChange = (e, type) => {
    if (type === 'email') {
      if (validator.isEmail(e.target.value)) {
        setEmailError({ message: 'Email sudah benar', status: true });
      } else {
        if (e.target.value === '') {
          setEmailError({ message: '', status: false });
        } else {
          setEmailError({ message: 'Email harus lengkap', status: false });
        }
      }
      setLogin({ ...login, email: e.target.value });
    } else {
      setLogin({ ...login, password: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(baseUrl, login, { withCredentials: false })
        .then((res) => {
          setState(res.data);
          setUser(res.data.data)
          setLoading(true);
          setIsLoggedIn(true)
          window.localStorage.setItem('key', res.data.data.token)
          Swal.fire('Berhasil!', 'Anda Telah Berhasil Login!', 'success').then((result) => {
            if (result.isConfirmed) {
              navigate(searchParams.get('redirect') ?? '/')
            }
          })

        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Gagal!',
            text: 'Login Gagal!',
            icon: 'error',
            confirmButtonText: 'ya, saya mencoba kembali',
          });
        });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: 'Gagal!',
        text: 'Login Gagal!',
        icon: 'error',
        confirmButtonText: 'ya, saya mencoba kembali',
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex py-44 items-center flex-col-reverse justify-center w-full md:gap-x-80  lg:flex-row">
        <div className="hidden md:flex">
          <img src={loginImage} alt="logo" className="max-w-4/5" />
        </div>
        <div className=" border-slate-200 rounded-xl  shadow-md p-12 w-96 sm:w-86 h-auto">
          <form
            className="text-sm max-w-[400px] h-full"
            onSubmit={handleSubmit}
          >
            <img src={logo} alt="logo" className="w-32 mx-auto mb-5" />
            <label htmlFor="email">
              <span className="block font-semibold mb-1 after:content-['*'] after:ml-0.5 ">
                Email
              </span>
              <input
                id="email"
                placeholder="codeIn@gmail.com"
                onChange={(e) => handleChange(e, 'email')}
                className="w-full  block border rounded border-orange-400 bg-gray-100 p-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                type="email"
                required
              />
              <p
                className={`mb-0 text-sm ${emailError.status ? 'text-green-700' : 'text-pink-700'
                  }`}
              >
                {emailError.message}
              </p>
            </label>
            <label htmlFor="password">
              <span className="block mt-4 font-semibold mb-1 after:content-['*'] after:ml-0.5 ">
                Password
              </span>
              <input
                placeholder="****"
                id="password"
                onChange={(e) => handleChange(e, 'password')}
                className="w-full block border rounded border-orange-400 bg-gray-100 p-2 mb-2 focus:outline-none focus:ring-orange-500 focus:border-orange-50"
                type="password"
                required
              />
            </label>

            <p className="text-right mt-2">
              <Link to="/" className="text-pink-700">
                Lupa Password ?
              </Link>
            </p>

            <input
              type="submit"
              className="w-full py-3 mt-8 bg-orange-500 hover:bg-orange-600 relative text-white shadow-md rounded-full"
              value="Masuk"
            />

            <p className="text-center mt-4">
              Belum Punya Account ?{' '}
              <Link to="/registerpage" className="font-bold">
                Daftar
              </Link>
            </p>

            <div className="flex flex-row justify-center">
              <div></div>
            </div>
            <button className="py-3 px-3 mt-8 mb-4 w-full justify-center rounded-2xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 flex">
              <div className="flex gap-4 justify-center max-w-sm ">
                <img src={google} className="w-5 " alt="google" />
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  with Google
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;