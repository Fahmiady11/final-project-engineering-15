import React from 'react';
import profile from '../../../Assets/fotoProfil.jpg';
// import icon from '../../../Assets/Vector.svg';
import LikeUnlike from '../LikeUnlike';
// import { ChatAltIcon } from '@heroicons/react/outline';
function HeadContentForum(props) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex gap-3 items-center font-poppins">
          <img
            className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
            src={profile}
            alt=""
          />
          <div className="">
            <p className="text-md font-semibold">{props?.user}</p>
            <p className="text-xs">Dibuat {(props?.date)?.substring(0, 10)}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <LikeUnlike like={props.like} />
            {/* <div className="flex items-center gap-1">
              <ChatAltIcon className="h-5 w-5 text-red-600" />
              <p className="">{props.answer}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadContentForum;
