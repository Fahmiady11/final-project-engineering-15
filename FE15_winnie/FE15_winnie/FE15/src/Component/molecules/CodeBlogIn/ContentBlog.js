import React, { useState, useEffect } from 'react';
import CardBlog from './CardBlog';
import { useBlogStore } from '../../store/ProductStore';
function ContentBlog(props) {
  const { filter } = props;
  const [dataBlogs, setDataBlogs] = useState(null);
  const blogs = useBlogStore((state) => state.blogs);
  useEffect(() => {
    setDataBlogs(blogs);
  }, [blogs]);
  let temp;
  if (filter === '') {
    temp = dataBlogs;
  } else {
    let tempData = [];
    dataBlogs && dataBlogs.map((item) =>
         {
          return item?.tag.forEach((element) => {
            if (element.tag.toLowerCase() === filter.toLowerCase()) {
              tempData.push(item);
            }
          });
        }
      );
    temp = tempData;
  }
  return (
    <>
      <div className="my-3 flex flex-col items-center gap-4">
        {temp && temp.map((data, index) => (
            <CardBlog
              key={index}
              id={data.id}
              title={data.title}
              content={data.content}
              date={(data.created_at).substring(0, 10)}
            //   answer={data.answer}
            //   like={data.like}
              img={data.photo}
            //   profileImg={data.profileImg}
              user={data.user.username}
              tags={data.tag}
            />
            
          ))}
      </div>
    </>
  );
}

export default ContentBlog;
