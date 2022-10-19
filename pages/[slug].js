import Link from "next/link";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="background p-10 rounded flex flex-col justify-center items-center">
        <p className="text">Sorry This page corrently not available</p>
        <div className="my-3">
          <Link href={"/"}>
            <button className="btn-primary">Go To Home</button>
          </Link>
        </div>
        <span className="text text-gray-800">{slug}</span>
      </div>
    </div>
  );
};

export default Slug;
