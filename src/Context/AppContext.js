import { createContext, useState } from "react";

import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPage(data.page);
      setTotalPage(data.totalPages);
      setPost(data.posts);
    } catch (error) {
      alert("Something went wrong");
      setPage(1);
      setPost([]);
      setTotalPage(null);
    }
    setLoading(false);
  }

  function pageChangeHandler(page) {
    setPage(page);
    fetchBlogPosts(page);
  }
  const values = {
    loading,
    setLoading,
    posts,
    setPost,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    pageChangeHandler,
  };

  return <AppContext.Provider value={values}> {children} </AppContext.Provider>;
}

export default AppContextProvider;
