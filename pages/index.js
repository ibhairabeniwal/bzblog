import Link from "next/link";
import CategorySlider from "../components/CategorySlider";
import HorizontalPost from "../components/HorizontalPost";
import PostSlider from "../components/PostSlider";
import SinglePost from "../components/SinglePost";
import SubscribeSection from "../components/SubscribeSection";
import TodaySelectedYou from "../components/TodaySelectedYou";
import TopMainHeadingSection from "../components/TopMainHeadingSection";

export default function Home({ expData, singlePost }) {
  return (
    <div>
      {/* --------Top Main Heading Section Start---------- */}
      <div>
        <TopMainHeadingSection />
        <div className="postSlider">
          {expData.map((slider) => (
            <PostSlider
              key={slider.id}
              img={slider.pimage}
              title={slider.title}
              category={slider.category}
            />
          ))}
        </div>
      </div>
      {/* --------Top Main Heading Section End---------- */}

      {/* --------CategorySlider Section Start---------- */}
      <div className="categorySlider">
        <button className="btn-primary">All</button>
        {expData.map((slider) => (
          <CategorySlider key={slider.id} category={slider.category} />
        ))}
      </div>
      {/* --------CategorySlider Section End---------- */}
      {/* --------Single Post Section Start---------- */}
      <div>
        {singlePost.map((spost) => (
          <SinglePost
            key={spost.id}
            category={spost.category}
            image={spost.pimage}
            avatar={spost.avatar}
            title={spost.title}
            username={spost.username}
            name={spost.full_name}
            description={spost.description}
          />
        ))}
      </div>
      <div className="border-t border-1 mb-3"></div>
      {/* --------Single Post Section End---------- */}
      {/* --------Horizontal Post Section Start---------- */}
      <div className="flex flex-col space-y-8">
        <TodaySelectedYou />
        {expData.map((hpost) => (
          <HorizontalPost
            key={hpost.id}
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
      {/* --------Horizontal Post Section End---------- */}
      {/* --------Email Subscription Start---------- */}
      <div className="py-5 lg:hidden">
        <SubscribeSection />
      </div>
      {/* --------Email Subscription End---------- */}
    </div>
  );
}

// --------API Routes----------
export async function getStaticProps() {
  const expData = await fetch("https://www.jsonkeeper.com/b/IWI8").then((res) =>
    res.json()
  );
  const singlePost = await fetch("https://www.jsonkeeper.com/b/132D").then(
    (res) => res.json()
  );

  const expPost = await fetch("https://www.jsonkeeper.com/b/WL1Q").then((res) =>
    res.json()
  );

  const expMinPost = await fetch("https://www.jsonkeeper.com/b/DRU1").then(
    (res) => res.json()
  );

  return {
    props: {
      expData,
      expPost,
      expMinPost,
      singlePost,
    },
  };
}
