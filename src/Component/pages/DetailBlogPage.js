import React, { useState, useEffect } from 'react';
import Navbar from '../molecules/Navbar';
import BreadCrumbs from '../molecules/BreadCrumbs';
import ViewTag from '../molecules/ViewTag';
import HeadContentBlog from '../molecules/DetailBlog/HeadContentBlog';
import InputMarkdown from '../molecules/InputMarkdown';
import ViewComments from '../molecules/DetailBlog/ViewComment';
import Footer from '../molecules/Footer';
import ScrollButton from '../atoms/ScrollButton';
import { useParams } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

function DetailBlogPage(props) {
  let { idblog } = useParams();
  const [api, setApi] = useState([]);
  const dataFind = props && props.data.filter((data) => data.id === +idblog);
  const { isLoggedIn } = useAuthStore()
  let key = window.localStorage.getItem("key")
  useEffect(() => {
    setApi(dataFind[0]);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div>
        <div className="w-screen h-screen">
          <Navbar />
          <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4 ">
            <BreadCrumbs prev="BlogIn" current="Detail Blog" />
            <div className="my-10 flex flex-col gap-6 ">
              <div className="">
                <img
                  src={api.img}
                  alt="gambarBanner"
                  className="rounded-t-3xl w-full md:h-96 md:object-cover md:object-top "
                />
              </div>
              <p className="font-semibold text-3xl">{api.title}</p>
              <HeadContentBlog
                user={api.user}
                date={api.date}
                like={api.like}
                comment={api.comment}
              />
              <ViewTag tags={api.tags} />
              <div
                className="border-2 bg-[#f2f2f2] border-gray-300 p-4 font-poppins rounded-md shadow-lg"
                dangerouslySetInnerHTML={{ __html: api.isicontent }}
              ></div>
              <ViewComments deskripsi="Komentar" total={5} />
              {isLoggedIn || key ?
                <>
                  <InputMarkdown
                    deskripsi="Tulis Komentar Di sini"
                    mode="markdown"
                    placeholder="Tulis Komentar anda disini"
                  />
                  <div className="flex justify-end">
                    <button className="shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-neutral-300 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
                      Kirim
                    </button>
                  </div>
                </> : null
              }
            </div>
          </div>
          <ScrollButton />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DetailBlogPage;
