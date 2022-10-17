import { BsThreeDots } from "react-icons/bs";

function MainProfile({ username, name, avatar, followers, following }) {
  return (
    <div className="border-b py-5  flex flex-col space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
          <h1 className="title">{name}</h1>
        </div>
        <span className="text cursor-pointer">
          <BsThreeDots />
        </span>
      </div>
      <div className="flex items-center space-x-5 lg:hidden">
        <span className="text text-[#333] cursor-pointer">@{username}</span>
        {/* <button className="btn-primary">follow</button> */}
      </div>
      <div className="flex space-x-5 lg:hidden">
        <span className="category">Followers {followers}</span>
        <span className="category">Following {following}</span>
      </div>
      <div className="flex space-x-5">
        <p className="category">Home</p>
        <p className="category">List</p>
        <p className="category">About</p>
      </div>
    </div>
  );
}

export default MainProfile;
