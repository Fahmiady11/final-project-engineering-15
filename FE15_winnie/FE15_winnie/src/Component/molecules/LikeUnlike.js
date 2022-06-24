import React, { useState, useEffect } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { STORAGE_KEY } from '../store/AuthStore';
function LikeUnlike(props) {
  let fakeApi = {
    like: false,
    totalLike: 0,
  };

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  let key = window.localStorage.getItem(STORAGE_KEY);

  useEffect(() => {
    setLike(fakeApi.like);
    setLikeCount(fakeApi.totalLike);
  }, [fakeApi.like, fakeApi.totalLike]);

  const handleLike = () => {
    if (like) {
      setLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <>
      {like ? (
        <div className="flex items-center gap-2">
          <HeartIconSolid
            className="h-8 w-8 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-xl wl-8 font-medium font-poppins">{likeCount}</p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <HeartIconOutline
            className="h-8 w-8 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-xl wl-8 font-medium font-poppins">{likeCount}</p>
        </div>
      )}
    </>
  );
}

export default LikeUnlike;
