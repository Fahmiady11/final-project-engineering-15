import React, { useState } from 'react';
import ScrollButton from '../atoms/ScrollButton';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import { PhoneIcon, BriefcaseIcon, CubeIcon } from '@heroicons/react/outline';
import gambarUser from '../../Assets/fotoProfil.jpg';

function ProfilePage() {
  const [isForum, setIsForum] = useState(false);

  const handleClickForum = () => {
    setIsForum(!isForum);

    if (isForum) {
      setIsForum(true);
    }
  };
  let activeStyle = {
    color: 'orange',
    textDecoration: 'underline',
  };
  const handleClickBlog = () => {
    setIsForum(isForum);

    if (isForum) {
      setIsForum(false);
    }
  };
  console.log(isForum);
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className="  mt-40 w-7/12  mx-auto flex flex-col items-center gap-10 justify-center">
          <div className="w-full">
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="shadow rounded-md bg-white">
                <form>
                  <div className="flex flex-col items-center px-5 py-4">
                    {/* <h2 className="col-span-2 text-xl self-start text-gray-600 font-semibold">
                      Profile
                    </h2> */}
                    <img
                      className="rounded-full w-32 h-32"
                      src={gambarUser}
                      alt=""
                    />
                    <h4 className="text-lg font-medium mt-2">Alexandra11</h4>
                    <div className="flex items-center text-gray-500">
                      <PhoneIcon className="w-4 h-4" />
                      <span className="text-sm ml-1">+62xx-xxx-xxx</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span className="text-sm ml-1">Fullstack Developer</span>
                    </div>
                    <p className="w-full text-sm text-gray-500 text-center italic mt-2 p-3 rounded border-2 border-dashed">
                      Never loose hope. Stay strong always curious. Always fight
                      for freedom.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="rounded-md shadow bg-white flex flex-col">
              <div className="flex space-x-4 items-center px-4 py-3">
                <CubeIcon className='"w-10 h-10 text-gray-400"' />
                <div className="flex flex-col space-y-1">
                  <h3 className="font-lg text-gray-500">ForumIn</h3>
                  <span className="font-semibold text-2xl text-gray-600">
                    0
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-md shadow bg-white flex flex-col">
              <div className="flex space-x-4 items-center px-4 py-3">
                <CubeIcon className='"w-10 h-10 text-gray-400"' />
                <div className="flex flex-col space-y-1">
                  <h3 className="font-lg text-gray-500">BlogIn</h3>
                  <span className="font-semibold text-2xl text-gray-600">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-full">
            <div className="flex flex-col md:p-12 md:flex-row md:mt-15 mt-0 pt-0">
              <div className="w-7/12 mx-auto flex flex-col gap-4">
                <div className="text-center flex flex-row justify-center mb-6 ">
                  <button
                    style={isForum ? activeStyle : null}
                    className="mr-10 text-2xl hover:text-orange-500 active:text-orange-500 active:border-b-2 active:border-orange-400"
                    onClick={() => handleClickForum()}
                  >
                    ForumIn
                  </button>
                  <button
                    style={!isForum ? activeStyle : null}
                    className="text-2xl cursor-pointer hover:text-orange-500 active:text-orange-500 active:border-b-2 active:border-orange-400"
                    onClick={() => handleClickBlog()}
                  >
                    BlogIn
                  </button>
                </div>
                <div className="border-t-2 border-gray-200 max-w-120"></div>
                <div className="mt-6">
                  {isForum ? (
                    <div className="flex w-11/12 flex-col gap-4 mx-auto"></div>
                  ) : (
                    <div className="flex w-11/12 flex-col gap-4 mx-auto"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
