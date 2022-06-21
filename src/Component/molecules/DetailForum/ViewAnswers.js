import React from 'react';
import { isiBlog } from '../../../ApiFake/dataBlogStatic';
import CardViewForum from './CardViewForum';

function ViewAnswers(props) {
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="block mb-2 text-lg text-gray-900 font-bold">
          {props.deskripsi} ({props.total})
        </p>
        <div className="my-3 flex flex-col gap-5 ">
          {isiBlog.map((data, index) => (
            <CardViewForum
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

export default ViewAnswers;
