import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="home-container flex justify-center">
        <div className="title-container">
          <div className="title text-4xl font-bold">
            🎉Welcom to Roadmap For Beginners🎉
          </div>
          <div className="sub-title flex justify-center">
            This awesome app repository is in&nbsp;
            <Link href="https://github.com/crypt0box/roadmap4beginners">
              <span className="text-blue-500 cursor-pointer">
                here!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
