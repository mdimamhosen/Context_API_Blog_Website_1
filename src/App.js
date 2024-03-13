import "./App.css";
import React, { useContext, useEffect } from "react";
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Pageination from "./Components/Pageination";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full select-none h-full flex flex-col items-center justify-center gap-x-1 ">
      <Header />
      <Blogs />
      <Pageination />
    </div>
  );
}

export default App;
