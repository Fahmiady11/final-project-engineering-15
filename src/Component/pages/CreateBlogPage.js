import React, { useState } from 'react';
import BackSubmit from '../molecules/BackSubmit';
import BreadCrumbs from '../molecules/BreadCrumbs';
import InputFile from '../molecules/InputFile';
import InputJudul from '../molecules/InputJudul';
import InputMarkdown from '../molecules/InputMarkdown';
import InputTags from '../molecules/InputTags';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import PreviewMarkdown from '../molecules/PreviewMarkdown';
import ScrollButton from '../atoms/ScrollButton';

function CreateBlogPage() {
  const [editorState, setEditorState] = useState({ html: '', md: '' });
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4">
          <BreadCrumbs prev="BlogIn" current="Buat Blog" />
          <div className="my-10 flex flex-col gap-6 ">
            <InputJudul label="Judul Blog" placeholder="Masukkan judul Blog" />
            <InputTags />
            <InputFile />
            <InputMarkdown
              setEditorState={setEditorState}
              deskripsi="Deskripsi"
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

export default CreateBlogPage;
