import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import React from "react";

function HorizontalPost({
  image,
  category,
  avatar,
  title,
  username,
  name,
  description,
}) {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="w-[70%] flex flex-col justify-between space-y-1">
        <div className="flex space-x-2 items-center text">
          <div className="flex items-center space-x-1">
            <img
              className="rounded-full w-6 h-6 hidden lg:inline"
              src={avatar}
              alt=""
            />
            <p className="text">{name}</p>
          </div>
          <p className="text">•</p>
          <span className="category">{category}</span>
        </div>
        <h1 className="title-secondary">{title}</h1>
        <p className="w-full subtitle truncate">{description}</p>
        <div className="flex items-center space-x-3 text">
          <div className="flex items-center space-x-1">
            <MdOutlineWatchLater />
            <span>5h ago</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineComment />
            <span>5</span>
          </div>
          <span className="cursor-pointer">
            <BsThreeDots />
          </span>
        </div>
      </div>
      <div className="items-center float-right ">
        <div className="lg:w-[150px] md:w-[150px] background rounded">
          <img className="object-cover" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HorizontalPost;
