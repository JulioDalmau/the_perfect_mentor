import React from 'react'
// import Vector from '../assets/home/Vector.png'
import Doodle1 from '../assets/home/doodle1.png'
import Doodle2 from '../assets/home/doodle2.png'

const Form = () => {
  return (
    <div className="relative bg-[#bfd732]">
      <img
        className="transform absolute -rotate-90 w-52 h-52 -right-2 -top-8"
        src={Doodle1}
        alt="doodle1"
      />
      <img
        className="transform absolute w-32 h-32 top-1 left-16"
        src={Doodle2}
        alt="doodle2"
      />
      {/* <img
        className="transform absolute top-16 left-7 w-52"
        src={Vector}
        alt="title"
      /> */}
      <div className="realtive inline-flex items-start top-1"></div>
      <form action="">
        <input
          className="z-30 text-sm text-gray-700 bg-[#bfd732] inline-flex items-center justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 top-[160px]"
          type="name"
          placeholder="Name"
          autoComplete="name"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16  text-sm text-gray-700 top-[230px]"
          type="lastname"
          placeholder="Lastname"
        />
        <input
          className="z-30 bg-[#bfd732] w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16  text-sm text-black top-[300px]"
          type="username"
          placeholder="Age"
          autoComplete="age"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 text-sm text-gray-700 top-[370px]"
          type="email"
          placeholder="Role"
          autoComplete="role"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 text-sm text-gray-700 top-[440px]"
          type="password"
          placeholder="Country"
          autoComplete="country"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 text-sm text-gray-700 top-[510px]"
          type="password"
          placeholder="Language"
          autoComplete="language"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 text-sm text-gray-700 top-[580px]"
          type="password"
          placeholder="Profession"
          autoComplete="profession"
        />
        <input
          className="z-30 inline-flex items-center bg-[#bfd732] justify-start w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 text-sm text-gray-700 top-[650px]"
          type="password"
          placeholder="Skills"
          autoComplete="skills"
        />
        <button className="relative flex items-center justify-center flex-1 px-32 py-4 left-10 top-[730px] bg-gray-700 rounded-full text-base font-bold text-gray-100">
          Sign up
        </button>
      </form>
      <div className="z-10 inline-flex items-start justify-start w-[340px] h-[610px] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-6 top-32">
        {/* <p className="flex-1 h-full text-3xl font-bold text-gray-700">
          Sign up
        </p> */}
        {/* <div className="absolute w-[310px] border-t-0 border-dotted border-gray-600 border-2 top-20 right-3" /> */}
      </div>
    </div>
  )
}

export default Form