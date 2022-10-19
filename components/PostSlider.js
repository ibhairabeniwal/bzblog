import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";

function PostSlider({ title, category, img }) {
  return (
    <div className="flex flex-col space-y-1">
      <div className="w-[328px] h-[185.63px] bg-gray-300 rounded-md relative">
        <img
          className="rounded-md h-full w-full object-cover"
          src={img}
          alt="Image of the post"
        />
        {/* <button className="btn-primary absolute top-3 left-3">Trending</button> */}
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-roboto font-semibold text-color-primary truncate w-[328px]">
          {title}
        </h1>
      </div>
      <div className="flex justify-between text">
        <span>{category}</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MdOutlineWatchLater />
            <span>1h ago</span>
          </div>
          <div className="flex items-center space-x-1">
            <AiOutlineComment />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSlider;
