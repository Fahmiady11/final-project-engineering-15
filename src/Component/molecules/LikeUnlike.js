import React, { useEffect, useState } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useForumStore, useBlogStore } from '../store/ProductStore';
import axios from 'axios';
function LikeUnlike(props) {
  const [state, setState] = useState({});
  let key = window.localStorage.getItem('key');
  const forumsId = useForumStore((state) => state.forumId);
  const blogId = useBlogStore((state) => state.blogId);

  useEffect(() => {
    if (props.type === 'likeForum') {
      setState(forumsId);
    } else if (props.type === 'blogForum') {
      setState(blogId);
    }
    //eslint-disable-next-line
  }, [forumsId, blogId]);

  let tempApi;
  if (props.type === 'likeForum') {
    tempApi = forumsId;
  } else if (props.type === 'blogForum') {
    tempApi = blogId;
  }

  const handleLike = async () => {
    if (props.type === 'likeForum') {
      if (state?.is_you_like) {
        await axios
          .delete(`https://be.codein.studio/like/forum/${tempApi.id}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${key}`,
            },
          })
          .then((res) => {
            setState({
              ...state,
              is_you_like: false,
              total_likes: state.total_likes - 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await axios
          .post(
            `https://be.codein.studio/like/forum/${tempApi.id}`,
            {},
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${key}`,
              },
            }
          )
          .then((res) => {
            setState({
              ...state,
              is_you_like: true,
              total_likes: state.total_likes + 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else if (props.type === 'likeBlog') {
      console.log('otw');
    }
  };
  return (
    <>
      {state?.is_you_like ? (
        <div className="flex items-center gap-2">
          <HeartIconSolid
            className="h-8 w-8 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-xl wl-8 font-medium font-poppins">
            {state?.total_likes}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <HeartIconOutline
            className="h-8 w-8 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-xl wl-8 font-medium font-poppins">
            {state?.total_likes}
          </p>
        </div>
      )}
    </>
  );
}

export default LikeUnlike;
