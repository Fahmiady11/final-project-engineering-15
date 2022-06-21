import React, { useState,useEffect } from 'react';
import ContentBlog from '../molecules/CodeBlogIn/ContentBlog';
import Footer from '../molecules/Footer';
import Head from '../molecules/Head';
import Navbar from '../molecules/Navbar';
import ScrollButton from '../atoms/ScrollButton';

function BlogPage(props) {
  const [api, setApi] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    setApi(props.data);
  }, [props.data]);
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4">
          <Head
            titleHead="Code BlogIn"
            contentHead="Tempat para programmer menulis seputar wawasan dunia teknologi dan komputer"
            nameButton="Create Blog"
            path="/blogin/createblog"
            setFilter={setFilter}
          />
          <ContentBlog dataApi={api} filter={filter} />
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
