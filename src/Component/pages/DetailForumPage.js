import React, { useEffect, useState } from 'react';
import Navbar from '../molecules/Navbar';
import BreadCrumbs from '../molecules/BreadCrumbs';
import ViewTag from '../molecules/ViewTag';
import InputMarkdown from '../molecules/InputMarkdown';
import ViewAnswers from '../molecules/DetailForum/ViewAnswers';
import HeadContentForum from '../molecules/DetailForum/HeadContentForum';
import Footer from '../molecules/Footer';
import ScrollButton from '../atoms/ScrollButton';
import { useParams } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

function DetailForumPage(props) {
  // let judulBlog = 'Bagaimana menyelesaikan error di Python?';
  // let isicontent =
  //   "<p><strong><span style='white-space:pre-wrap;'>What is Lorem Ipsum?</span></strong><span style='white-space:pre-wrap;'> </span></p><p><br class='ProseMirror-trailingBreak'></p><p><br class='ProseMirror-trailingBreak'></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br class='ProseMirror-trailingBreak'></p><p><strong>Why do we use it?</strong></p><p><br class='ProseMirror-trailingBreak'></p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br class='ProseMirror-trailingBreak'></p><p><img src='https://media.bitdegree.org/storage/media/images/2018/08/learn-coding-4.png' alt='image' contenteditable='false'><img class='ProseMirror-separator' alt=''><br class='ProseMirror-trailingBreak'></p>";
  let { idforum } = useParams();
  const [api, setApi] = useState([]);
  const dataFind = props && props.data.filter((data) => data.id === +idforum);
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
            <BreadCrumbs prev="ForumIn" current="Detail Pertanyaan" />
            <div className="my-10 flex flex-col gap-6 ">
              <p className="font-semibold text-3xl">{api.title}</p>
              <HeadContentForum
                user={api.user}
                date={api.date}
                like={api.like}
                answer={api.answer}
              />
              <ViewTag tags={api.tags} />
              <div
                className="border-2 bg-[#f2f2f2] border-gray-300 p-4 font-poppins rounded-md shadow-lg"
                dangerouslySetInnerHTML={{ __html: api.isicontent }}
              ></div>
              <ViewAnswers deskripsi="Jawaban" total={5} />
              {isLoggedIn || key ?
                <>
                  <InputMarkdown
                    deskripsi="Tulis Jawaban Di sini"
                    mode="markdown"
                    placeholder="Tulis Jawaban anda disini"
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

export default DetailForumPage;
