import create from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

const storeBlog = (set) => ({
  blogs: null || [],
  blogId: null || {},
  comments: null || [],
  fetchBlogs: async (url) => {
    const response = await axios.get(url);
    set({ blogs: await response.data.data });
  },
  fetchBlogId: async (url) => {
    const response = await axios.get(url);
    set({ blogId: await response.data.data });
  },
  changeBlog: (data) =>
    set((state) => {
      if (state.blogs === null) {
        set({ blogs: [data] });
      } else {
        set({ blogs: [...state.blogs, data] });
      }
    }),

  setComment: (data) => set((state) => ({ comments: data.data })),
  changeComment: (data) =>
    set((state) => {
      if (state.comments === null) {
        set({ comments: [data] });
      } else {
        set({ comments: [...state.comments, data] });
      }
    }),
});

const useBlogStore = create(devtools(storeBlog));

const storeForum = (set) => ({
  forums: null || [],
  forumId: null || {},
  answers: null || [],
  fetchForums: async (url) => {
    const response = await axios.get(url);
    set({ forums: await response.data.data });

  },
  fetchForumId: async (url) => {
    const response = await axios.get(url);
    set({ forumId: await response.data.data });

  },

  setAnswer: (data) => set((state) => ({ answers: data.data })),
  changeAnswer: (data) =>
    set((state) => {
      if (state.answers === null) {
        set({ answers: [data] });
      } else {
        set({ answers: [...state.answers, data] });
      }
    }),
});
const useForumStore = create(devtools(storeForum));

export { useBlogStore, useForumStore };
