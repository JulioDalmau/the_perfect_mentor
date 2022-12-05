import React from "react";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import Vector from "../assets/home/Vector.png";

const Signup = () => {
  return (
    <div className="relative bg-[#bfd732]">
      <img
        className="transform absolute -rotate-90 w-52 h-52 -right-2 top-1"
        src={Doodle1}
        alt="doodle1"
      />
      <img
        className="transform absolute w-32 h-32 top-1 left-32"
        src={Doodle2}
        alt="doodle2"
      />
      <img
        className="transform absolute top-16 left-7 w-52"
        src={Vector}
        alt="title"
      />
      <div className="realtive inline-flex items-start top-1"></div>
      <form action="">
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 top-[380px] text-sm text-gray-700"
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 top-[450px] text-sm text-gray-700"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button className="relative flex items-center justify-center flex-1 px-32 py-4 left-10 top-[590px] bg-gray-700 rounded-full text-base font-bold text-gray-100">
          Sign in
        </button>
      </form>
      <div className="inline-flex items-start justify-start w-[340px] h-[390px] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-6 top-48">
        <p className="flex-1 h-full text-3xl font-bold text-gray-700">
          Sign in
        </p>
        <div className="absolute w-[310px] border-t-0 border-dotted border-gray-600 border-2 top-20 right-3" />
      </div>
    </div>
  );
};

export default Signup;
