import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pageination = () => {
  const { page, totalPage, pageChangeHandler } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-400 inset-x-0 w-full">
      <div className="flex items-center gap-x-3 w-11/12 justify-center max-w-2xl mx-auto">
        {" "}
        {page > 1 && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => pageChangeHandler(page - 1)}
          >
            Previous{" "}
          </button>
        )}{" "}
        {page < totalPage && (
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => pageChangeHandler(page + 1)}
          >
            Next{" "}
          </button>
        )}{" "}
        <p className="text-sm font-semibold ml-auto">
          Page {page}
          of {totalPage}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Pageination;
