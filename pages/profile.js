import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalPost from "../components/HorizontalPost";
import MainProfile from "../components/MainProfile";
import RightPostSuggestions from "../components/RightPostSuggestions";
import RightSideTopSection from "../components/RightSideTopSection";
import StaffPick from "../components/StaffPick";
import SubscibeSection from "../components/SubscibeSection";

function profile({ mainuser, expData, expMinPost }) {
  return (
    <main className="body">
      <Header />
      <div className="mainPostSection">
        <div className="sticky top-0 z-50 bg-white">
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
        <div className="flex flex-col space-y-8 mt-5">
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
      </div>
      <div className="rightSideSection">
        <RightSideTopSection />
        <div className="space-y-5 flex flex-col">
          <StaffPick />
          {expMinPost.map((rpost) => (
            <RightPostSuggestions
              key={rpost.username}
              name={rpost.full_name}
              avatar={rpost.avatar}
              title={rpost.title}
              category={rpost.category}
            />
          ))}
          <span className="text cursor-pointer">See the full list</span>
        </div>
        <SubscibeSection />
        <Footer />
      </div>
    </main>
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
