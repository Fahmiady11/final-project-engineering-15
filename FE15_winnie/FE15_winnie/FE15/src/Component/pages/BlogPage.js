import React, { useState, useEffect } from 'react';
import ContentBlog from '../molecules/CodeBlogIn/ContentBlog';
import Footer from '../molecules/Footer';
import Head from '../molecules/Head';
import Navbar from '../molecules/Navbar';
import ScrollButton from '../atoms/ScrollButton';
import { useBlogStore } from '../store/ProductStore';

function BlogPage() {
  const [filter, setFilter] = useState('');
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
  useEffect(() => {
    fetchBlogs('https://be.codein.studio/blogs');
  }, [fetchBlogs]);
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4">
          <Head
            titleHead="Code BlogIn"
            contentHead="Tempat para programmer menulis seputar wawasan dunia teknologi dan komputer"
            nameButton="Create Blog"
            path="/blog/createblog"
            setFilter={setFilter}
          />
          <ContentBlog filter={filter} />
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
