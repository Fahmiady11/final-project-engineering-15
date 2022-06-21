import React from 'react';
import LikeUnlike from '../LikeUnlike';
import CheckedCard from './CheckedCard';
function CardViewForum(props) {
  let isicontent =
    "<p><strong><span style='white-space:pre-wrap;'>What is Lorem Ipsum?</span></strong><span style='white-space:pre-wrap;'> </span></p><p><br class='ProseMirror-trailingBreak'></p><p><br class='ProseMirror-trailingBreak'></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br class='ProseMirror-trailingBreak'></p><p><strong>Why do we use it?</strong></p><p><br class='ProseMirror-trailingBreak'></p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br class='ProseMirror-trailingBreak'></p><p><img src='https://media.bitdegree.org/storage/media/images/2018/08/learn-coding-4.png' alt='image' contenteditable='false'><img class='ProseMirror-separator' alt=''><br class='ProseMirror-trailingBreak'></p>";
  return (
    <>
      <div className="flex flex-col gap-6 rounded-md shadow-lg font-poppins border-2 bg-[#f2f2f2] border-gray-300 p-4">
        <div className="flex justify-between items-center font-poppins">
          <div className="flex gap-3 items-center">
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
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-6">
              <LikeUnlike like={props.like} />
              <CheckedCard />
            </div>
          </div>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: isicontent }}
        ></div>
      </div>
    </>
  );
}

export default CardViewForum;
