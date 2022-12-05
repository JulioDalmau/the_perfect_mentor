import React from "react";
import Group85 from "../assets/users/Group85.png";

const Users = () => {
  return (
    <>
      <div className="absolute bg-gray-100 right-11 w-[420px] h-[850px]">
        <div className="transform rotate-180 w-96 h-36 absolute left-16 top-0 bg-[#bfd732] rounded-tl-3xl" />

        <img
          className="transform -rotate-2 w-64 h-64 absolute right-0 top-0"
          src={Group85}
          alt=""
        />

        <form>
          <input
            className="z-40 absolute bg-white h-12 w-[350px] rounded-t-3xl top-28 left-24 "
            type="text"
          />
        </form>
      </div>
      <div className="absolute w-[390px] h-20 right-0 bottom-0 bg-gray-700 rounded-t-3xl" />
    </>
  );
};

export default Users;
