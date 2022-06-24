import React, { useState, useEffect } from 'react';
import CardForum from './CardForum';
import { useForumStore } from '../../store/ProductStore';
function ContentForum(props) {
  const { filter } = props;
  const [dataForums, setDataForums] = useState(null);
  const forums = useForumStore((state) => state.forums);
  useEffect(() => {
    setDataForums(forums);
  }, [forums]);
  let temp;
  if (filter === '') {
    temp = dataForums;
  } else {
    let tempData = [];
    dataForums &&
      dataForums.map((item) => {
        return item?.tag.forEach((element) => {
          if (element.tag.toLowerCase() === filter.toLowerCase()) {
            tempData.push(item);
          }
        });
      });
    temp = tempData;
  }
  return (
    <>
      <div className="my-3 flex flex-col items-center gap-4">
        {temp &&
          temp.map((data, index) => (
            <CardForum
              key={index}
              id={data.id}
              title={data.title}
              content={data.content}
              date={(data.created_at).substring(0, 10)}
              answer={5}
              like={3}
              // profileImg={data.profileImg}
              user={data.user.username}
              tags={data.tag}
            />
          ))}
      </div>
    </>
  );
}

export default ContentForum;
