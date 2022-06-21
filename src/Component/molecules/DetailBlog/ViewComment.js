import React from 'react';
import { isiBlog } from '../../../ApiFake/dataBlogStatic';
import CardViewBlog from './CardViewBlog';
function ViewComments(props) {
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="block mb-2 text-sm text-gray-900 font-bold">
          {props.deskripsi} ({props.total})
        </p>
        <div className="my-3 flex flex-col gap-5 w-full h-96 xl:h-64 xl:flex-row flex-nowrap overflow-y-auto xl:overflow-x-auto ">
          {isiBlog.map((data, index) => (
            <CardViewBlog 
                key={data.id}
                date={data.date}
                comment={data.content}
                user={data.user}
                profileImg={data.profileImg}
                like={data.like}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewComments;
