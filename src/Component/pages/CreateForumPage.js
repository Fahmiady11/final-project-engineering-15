import React, { useState } from 'react';
import BackSubmit from '../molecules/BackSubmit';
import BreadCrumbs from '../molecules/BreadCrumbs';
import InputJudul from '../molecules/InputJudul';
import InputMarkdown from '../molecules/InputMarkdown';
import InputTags from '../molecules/InputTags';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import PreviewMarkdown from '../molecules/PreviewMarkdown';
import ScrollButton from '../atoms/ScrollButton';
function CreateForumPage() {
  const [editorState, setEditorState] = useState({ html: '', md: '' });
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4 ">
          <BreadCrumbs prev="ForumIn" current="Buat Pertanyaan" />
          <div className="my-10 flex flex-col gap-6 ">
            <InputJudul
              label="Judul Pertanyaan"
              placeholder="Masukkan judul pertanyaan"
            />
            <InputTags />
            <InputMarkdown
              setEditorState={setEditorState}
              mode="wysiwyg"
              placeholder="Tulis deskripsi anda disini"
            />
            <PreviewMarkdown editorState={editorState} />
            <BackSubmit />
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default CreateForumPage;
