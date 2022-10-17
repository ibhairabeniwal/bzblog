import React from "react";
import { CiRead } from "react-icons/ci";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsThreeDots, BsBookmarks } from "react-icons/bs";

function SinglePost({
  pimage,
  category,
  avatar,
  image,
  title,
  username,
  name,
  description,
}) {
  return (
    <div className="flex flex-col space-y-2 py-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full w-6 h-6 lg:w-9 lg:h-9"
            src={avatar}
            alt=""
          />
          <span className="text-sm font-roboto font-semibold text-color-primary">
            {name}
          </span>
        </div>
        <button className="btn-primary">Follow</button>
      </div>

      <div>
        <h1 className="title">{title}</h1>
        <p className="subtitle w-full truncate">{description}</p>
      </div>
      <div>
        <img className="rounded-md" src={image} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center text">
          <div className="flex items-center space-x-[2px]">
            <CiRead />
            <span>7 min read</span>
          </div>
          <span>•</span>
          <span>Selected for you</span>
        </div>
        <div className="flex space-x-5 items-center py-3 text-base text-color-primary">
          <span className="cursor-pointer">
            <BsBookmarks />
          </span>
          <span className="cursor-pointer">
            <AiOutlineMinusCircle />
          </span>
          <span className="cursor-pointer">
            <BsThreeDots />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
