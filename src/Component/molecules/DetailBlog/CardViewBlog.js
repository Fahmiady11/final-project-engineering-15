import React from 'react';

function CardViewBlog(props) {
  return (
    <>
      <div className="border-2 bg-[#f2f2f2] border-gray-300 rounded-md shadow-lg font-poppins p-3">
        <p className="xl:w-72 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          sem et tortor consequat id porta nibh
        </p>
        <div className="flex justify-end gap-3 items-center font-poppins">
          <img
            className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
            src={props.profileImg}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">{props.user}</p>
            <p className="text-xs">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardViewBlog;
