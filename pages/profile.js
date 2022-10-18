import React from "react";

import HorizontalPost from "../components/HorizontalPost";
import MainProfile from "../components/MainProfile";

function profile({ mainuser, expData }) {
  return (
    <>
      <div className="pCard">
        {mainuser.map((user) => (
          <MainProfile
            key={user.id}
            username={user.username}
            name={user.full_name}
            avatar={user.avatar}
            followers={user.followers}
            following={user.following}
          />
        ))}
      </div>
      <div className="pData">
        {expData.map((hpost) => (
          <HorizontalPost
            key={hpost.pimage}
            category={hpost.category}
            image={hpost.pimage}
            avatar={hpost.avatar}
            title={hpost.title}
            username={hpost.username}
            name={hpost.full_name}
            description={hpost.description}
          />
        ))}
      </div>
    </>
  );
}

export default profile;
export async function getStaticProps() {
  const mainuser = await fetch("https://www.jsonkeeper.com/b/JFV9").then(
    (res) => res.json()
  );

  const expData = await fetch("https://www.jsonkeeper.com/b/IWI8").then((res) =>
    res.json()
  );

  const expMinPost = await fetch("https://www.jsonkeeper.com/b/DRU1").then(
    (res) => res.json()
  );
  return {
    props: {
      mainuser,
      expData,
      expMinPost,
    },
  };
}
