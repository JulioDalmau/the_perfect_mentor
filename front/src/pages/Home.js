import React from "react";
import Saly from "../assets/home/Saly.png";
import Vector from "../assets/home/Vector.png";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import Doodle42 from "../assets/loginsignup/doodle42.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="absolute bg-[#bfd732] w-full h-full" />
      <img
        className="absolute z-20 w-[98%] h-[55%] right-0 top-[24%] 
        sm:top-[20%] sm:h-[60%] sm:w-[75%] sm:left-[14%]
        md:top-[10%] md:h-[63%] md:w-[55%] md:left-[2%]
        lg:top-[10%] lg:h-[63%] lg:w-[55%] lg:left-[2%]
        xl:top-[13%] xl:h-[65%] xl:w-[42%] xl:left-[13%]
        2xl:top-[17%] 2xl:h-[60%] 2xl:w-[35%] 2xl:left-[20%]
        "
        src={Saly}
        alt="doodle1"
      />
      <img
          className="max-md:hidden z-20 transform absolute left-[42%] w-[10%] top-[10%]
          md:top-[12%] md:h-[15%] md:w-[15%] md:left-[37%]
          lg:top-[12%] lg:h-[15%] lg:w-[15%] lg:left-[37%]
          xl:top-[12%] xl:h-[14%] xl:w-[14%] xl:left-[37%]
          2xl:top-[16%] 2xl:h-[13%] 2xl:w-[10%] 2xl:left-[45%]
          "
          src={Doodle42}
          alt="title"
        />
      <img
        className="z-20 transform absolute rotate-180 w-[35%] h-[15%] left-[25%] bottom-48 
        sm:rotate-180 sm:w-[25%] sm:h-[15%] sm:bottom-[22%] sm:left-[30%]
        md:rotate-90 md:w-[12%] md:h-[20%] md:top-[25%] md:left-[83%] 
        lg:rotate-90 lg:w-[12%] lg:h-[20%] lg:top-[25%] lg:left-[79%]
        xl:rotate-90 xl:w-[10%] xl:h-[18%] xl:top-[25%] xl:left-[72%]
        2xl:rotate-90 2xl:w-[10%] 2xl:h-[18%] 2xl:top-[30%] 2xl:left-[70%]
        "
        src={Doodle2}
        alt="doodle2"
      />
      {/* title */}
      <img
        className="transform z-40 absolute top-44 left-7 w-44 
        sm:left-[10%] sm:w-52 sm:top-[18%]
        md:left-[58%] md:w-44 md:top-[35%]
        lg:left-[56%] lg:w-44 lg:top-[35%]
        xl:left-[56%] xl:w-44 xl:top-[35%]
        2xl:left-[56%] 2xl:w-48 2xl:top-[35%]"
        src={Vector}
        alt="title"
      />
      <img
          className="z-20 transform w-44 h-44 absolute rotate-6 -left-18 top-[37%] 
          sm:left-[10%] sm:w-52 sm:top-[35%]
          md:left-[2%] md:w-40 md:top-[23%]
          lg:left-[10%] lg:w-40 lg:top-[23%]
          xl:left-[17%] xl:w-40 xl:top-[27%] 
          2xl:left-[22%] 2xl:w-40 2xl:top-[27%] 
          "
          src={Doodle1}
          alt="dodle1"
        />
        <div className="max-md:hidden z-10 inline-flex items-start justify-start w-[88%] h-[46%] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-[6%] top-48 
      md:left-[10%] md:h-[50%] md:w-[80%]
      lg:left-[15%] lg:h-[50%] lg:w-[70%]
      xl:left-[22%] xl:h-[50%] xl:w-[55%]
      2xl:left-[26%] 2xl:h-[50%] 2xl:w-[50%]
      "></div>
      <div
        className="z-10 inline-flex items-start justify-start w-[88%] h-[70%] pl-6 pr-48 pt-7 pb-72 absolute  left-[5%] top-48 
      md:left-[10%] md:h-[50%] md:w-[80%]
      lg:left-[15%] lg:h-[50%] lg:w-[70%]
      xl:left-[22%] xl:h-[50%] xl:w-[55%]
      2xl:left-[26%] 2xl:h-[50%] 2xl:w-[50%]
      "
      >
        {/* <div className="absolute space-y-7"> */}
          <Link to="/signup">
            <button
              className="z-30 absolute flex items-center justify-center flex-1 px-[20%] py-4 left-[12%] bottom-[16%] w-[80%] h-[7%] bg-gray-700 rounded-full font-bold text-gray-100 
              md:left-[58%] md:h-[8%] md:w-[35%] md:bottom-[28%] md:px-5
              xl:left-[61%] xl:h-[9%] xl:w-[30%] xl:bottom-[25%] xl:px-5
              2xl:left-[60%] 2xl:h-[9%] 2xl:w-[30%] 2xl:bottom-[26%] 2xl:px-5
        "
              type="submit"
            >
              Sign up
            </button>
          </Link>
          <Link to="/login">
            {/* button Login */}
            <button
              className="z-30 absolute flex items-center justify-center flex-1 px-[20%] py-4 left-[12%] bottom-10 w-[80%] h-[7%] border-solid border-2 border-gray-700 rounded-full font-bold text-neutral-700 
          md:left-[58%] md:h-[6%] md:w-[35%] md:bottom-[16%] md:px-5
          xl:left-[61%] xl:h-[9%] xl:w-[30%] xl:bottom-[13%] xl:px-5
          2xl:left-[60%] 2xl:h-[9%] 2xl:w-[30%] 2xl:bottom-[11%] 2xl:px-5
          "
              type="submit"
            >
              Log in
            </button>
          </Link>
        {/* </div> */}
      </div>
      {/* <div className="absolute w-full h-full pt-32 pb-16 bg-[#bfd732]">
        <div className="z-40 absolute w-52 left-[7%] top-36 xl:left-[52%] xl:top-[36%]">
          
       

        
        
        <div className="z-20 rotate-0 w-32 h-32 absolute left-32 bottom-[20%] 
        xl:left-[65%] xl:rotate-45 xl:top-[30%] xl:h-[25%] xl:w-[22%]">
          <img className="flex-1 h-full" src={Doodle2} alt="dodle2" />
        </div>
      </div>
      <div
        className="absolute z-40 flex flex-col space-y-4 bottom-16  mx-5
      xl:bottom-[30%] xl:left-[50%]"
      >
        
      </div>
      <div className="max-xl:hidden z-10 absolute inline-flex w-[88%] h-[46%] pl-6 pr-48 pt-7 pb-72 border-2 rounded-3xl border-gray-700 left-6 top-48 xl:left-[28%] xl:h-[50%] xl:w-[44%]" /> */}
    </>
  );
};

export default Home;
