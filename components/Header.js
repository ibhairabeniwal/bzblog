import Link from "next/link";

function Header() {
  return (
    <header className="flex w-full h-12 border-t justify-between items-center bottom-0 lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-20 fixed bg-white z-10 lg:p-5">
      <div className="hidden lg:inline-flex">
        <Link href="/">
          <img className="w-16 cursor-pointer" src="/brandlogo.png" alt="" />
        </Link>
      </div>
      <div className="flex w-full p-4 md:px-28 sm:px-14 lg:flex-col justify-between items-center lg:gap-10">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Home />
          </div>
        </Link>
        <Link href="/notification">
          <div className="hidden lg:flex items-center justify-center">
            <span className="hidden lg:inline-flex">
              <Notification />
            </span>
          </div>
        </Link>
        <Link href="/explore">
          <div className="flex items-center justify-center lg:hidden">
            <span className="inline-flex lg:hidden">
              <Search />
            </span>
          </div>
        </Link>
        <Link href="/list">
          <div className="flex items-center justify-center">
            <Lists />
          </div>
        </Link>

        <Link href="/stories">
          <div className="hidden lg:inline-flex items-center justify-center">
            <Stories />
          </div>
        </Link>
        <Link href="/write">
          <div className="hidden lg:flex items-center justify-center">
            <span className="hidden lg:inline-flex">
              <Write />
            </span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex items-center justify-center">
            <span className="inline-flex lg:hidden">
              {/* <SignIn /> */}
              <img
                className="rounded-full w-6 h-6"
                src="https://miro.medium.com/fit/c/96/96/1*_DMx-AJeK7YRpdrkdbRrrg.jpeg"
                alt=""
              />
            </span>
          </div>
        </Link>
      </div>
      <Link href="/profile">
        <div className="hidden lg:inline-flex">
          {/* <SignIn /> */}
          <img
            className="rounded-full"
            src="https://miro.medium.com/fit/c/96/96/1*_DMx-AJeK7YRpdrkdbRrrg.jpeg"
            alt=""
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
function Home() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Home"
    >
      <path
        d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

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

function Lists() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Lists"
    >
      <path
        d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
      <path
        d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
    </svg>
  );
}

function Stories() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Stories"
    >
      <path
        d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
        stroke="currentColor"
      ></path>
      <path
        d="M8 8.5h8M8 15.5h5M8 12h8"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
    </svg>
  );
}

function Write() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Write"
    >
      <path
        d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
        fill="currentColor"
      ></path>
      <path
        d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
        stroke="currentColor"
      ></path>
    </svg>
  );
}

function SignIn() {
  return (
    <svg
      className="cursor-pointer"
      width="24"
      height="24"
      fill="#333"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );
}

function Search() {
  return (
    <svg
      className="cursor-pointer"
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
