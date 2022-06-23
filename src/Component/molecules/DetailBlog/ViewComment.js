import React,{useEffect} from 'react';
import { isiBlog } from '../../../ApiFake/dataBlogStatic';
import CardViewBlog from './CardViewBlog';
import { useBlogStore } from '../../store/ProductStore';
function ViewComments(props) {
  const comments=useBlogStore((state)=>state.comments);
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="block mb-2 text-sm text-gray-900 font-bold">
          {props.deskripsi} ({comments?.length})
        </p>
        <div className="my-3 flex flex-col gap-5 w-full h-96 xl:h-64 flex-nowrap overflow-y-auto xl:overflow-x-auto ">
          {comments && comments.map((data, index) => (
            <CardViewBlog 
                key={data?.id}
                date={data?.created_at}
                comment={data?.comment}
                user={data?.user?.username}
                // profileImg={data.profileImg}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewComments;
