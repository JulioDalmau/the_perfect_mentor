import React from "react";
import Saly from "../assets/home/Saly.png";
import Vector from "../assets/home/Vector.png";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="inline-flex flex-col -space-y-9 items-center justify-end w-full pt-32 pb-16">
        <div className="z-50 relative w-52 right-16 top-0">
          <img src={Vector} alt="title" />
        </div>
        <div className="relative w-[400px] h-[500px]">
          <div className="z-30 absolute w-52 h-28 bg-[#bfd732] bg-opacity-100 rounded-lg"></div>
          <img
            className="z-10 absolute right-0 bottom-16 w-[600px] h-[521px]"
            src={Saly}
            alt="Saly"
          />

          <img
            className="transform w-44 h-44 absolute rotate-6 -left-18 top-12"
            src={Doodle1}
            alt="dodle1"
          />
          <div className="transform rotate-0 w-32 h-32 absolute left-32 bottom-9">
            <img className="flex-1 h-full" src={Doodle2} alt="dodle2" />
          </div>
        </div>
        <div className="relative z-40 flex flex-col space-y-2">
          <Link to="/signup">
            <button className="text-white w-70 h-14 bg-neutral-700 font-bold px-32 mx-2 rounded-full cursor-pointer ">
              Sign up
            </button>
          </Link>
          <Link to="/login">
            <button className="text-neutral-700 w-70 h-14 rounded-full font-bold px-32 mx-2 border-solid border-2 border-gray-700 cursor-pointer">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Main;
