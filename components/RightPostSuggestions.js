import React from "react";

function RightPostSuggestions({ name, avatar, title, category }) {
  return (
    <div className="flex flex-col">
      <div className="text flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <img className="rounded-full w-6 h-6" src={avatar} alt="" />
          <p className="cursor-pointer">{name}</p>
        </div>
        <span>•</span>
        <span className="cursor-pointer">{category}</span>
      </div>
      <h1 className="title-secondary">{title}</h1>
    </div>
  );
}

export default RightPostSuggestions;
