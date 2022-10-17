import React from "react";
import Link from "next/link";

function TopMainHeadingSection() {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex flex-col text-color-primary">
        <h1 className="text-xl lg:text-2xl font-roboto font-semibold">
          Trending of the day
        </h1>
        <p className="text">Today, October 16</p>
      </div>
      <Link href="/notification">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center lg:hidden">
          <span className="w-2 h-2 bg-red-500 rounded-full absolute top-6 right-6 sm:right-16 md:right-[120px] border border-white"></span>
          <Notification />
        </div>
      </Link>
      <button className="btn-primary hidden lg:inline">Trending</button>
    </div>
  );
}

export default TopMainHeadingSection;
function Notification() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Notifications"
    >
      <path
        d="M15 18.5a3 3 0 1 1-6 0"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
      <path
        d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
        stroke="currentColor"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
