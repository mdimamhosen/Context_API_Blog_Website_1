// Blogs.js
import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
      {" "}
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="">
          <p className=""> No Post Found </p>{" "}
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="">
            <p className="font-bold text-sm"> {post.title} </p>{" "}
            <p className="text-[14px]">
              By <span className="italic"> {post.author} </span> or{" "}
              <a className="underline cursor-pointer font-bold text-blue-600">
                {" "}
                #{post.category}{" "}
              </a>{" "}
            </p>{" "}
            <p className="text-[14px]"> Posted on {post.date} </p>{" "}
            <p className="text-[16px] mt-[13px]"> {post.content} </p>{" "}
            <div className="flex flex-wrap gap-x-2 items-center">
              {" "}
              {post.tags.map((tag, index) => (
                <a
                  key={index}
                  className="text-xs font-semibold underline text-blue-700 cursor-pointer"
                >
                  #{tag}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>
        ))
      )}{" "}
    </div>
  );
};

export default Blogs;
