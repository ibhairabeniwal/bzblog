import React from "react";

function RightSideTopSection() {
  return (
    <div className="flex flex-col gap-7">
      <button className="btn-primary py-2 w-full">Get Unlimited Access</button>

      <div className="flex items-center space-x-3 h-10 border px-4 background text rounded-full">
        <Search />
        <input
          className="border-none outline-none bg-none w-full bg-transparent"
          placeholder="Search for people, and things"
          type="text"
        />
      </div>
    </div>
  );
}

export default RightSideTopSection;
function Search() {
  return (
    <svg
      className="cursor-pointer text"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Search"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
        fill="#333"
      ></path>
    </svg>
  );
}
