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
import { useForumStore } from '../store/ProductStore';
import axios from 'axios';
import { STORAGE_KEY } from '../store/AuthStore';
function DetailForumPage() {
  let { idforum } = useParams();
  const [inputMarkdown, setInputMarkdown] = useState({});
  const key = window.localStorage.getItem(STORAGE_KEY);

  const fetchForumId = useForumStore((state) => state.fetchForumId);
  const forum = useForumStore((state) => state.forumId);
  const setAnswer = useForumStore((state) => state.setAnswer);
  const changeAnswer = useForumStore((state) => state.changeAnswer);
  useEffect(() => {
    const handleApi = async () => {
      await axios
        .get(`https://be.codein.studio/commentsforum/${idforum}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setAnswer(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchForumId(`https://be.codein.studio/forums/${idforum}`);
    handleApi();
    //eslint-disable-next-line
  }, [fetchForumId, idforum, key]);

  const handleClick = async () => {
    await axios
      .post(
        `https://be.codein.studio/commentsforum/${idforum}`,
        inputMarkdown,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
        }
      )
      .then((res) => {
        changeAnswer(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <div className="w-screen h-screen overflow-x-hidden">
          <Navbar />
          <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4 ">
            <BreadCrumbs prev="ForumIn" current="Detail Pertanyaan" />
            <div className="my-10 flex flex-col gap-6 ">
              <p className="font-semibold text-3xl">{forum?.title}</p>
              <HeadContentForum
                user={forum.user?.username}
                date={forum?.created_at}
              // like={api.like}
              // answer={api.answer}
              />
              <ViewTag tags={forum.tag} />
              <div
                className="border-2 bg-[#f2f2f2] border-gray-300 p-4 font-poppins rounded-md shadow-lg"
                dangerouslySetInnerHTML={{ __html: forum?.content }}
              ></div>
              <ViewAnswers deskripsi="Jawaban" />
              {key && key ? (
                <div>
                  <InputMarkdown
                    deskripsi="Tulis Komentar Di sini"
                    mode="markdown"
                    placeholder="Tulis Komentar anda disini"
                    setEditorState={setInputMarkdown}
                    type="answer"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleClick}
                      className="shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-neutral-300 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              ) : null}
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
