import React from 'react'
import { BackgroundCard } from '../components/BackgroundCard'
import { Navbar } from '../components/Navbar'

const Matches = () => {
  return (
    <>
    {/* background color */}
    <div
          className="absolute w-full h-52 bg-[#bfd732] rounded-br-3xl 
        sm:w-full sm:h-full sm:rounded-none
        md:w-full md:h-full md:rounded-none
        lg:w-full lg:h-full lg:rounded-none
        xl:w-full xl:h-full xl:rounded-none
        2xl:w-full 2xl:h-full 2xl:rounded-none"
        />
        {/* background white */}
        <BackgroundCard />
        {/* Title */}
        <p
          className="z-20 absolute font-bold text-4xl text-gray-600 left-8 top-10 
        sm:top-[11%] sm:left-[36%]
        md:top-[7%] md:left-[57%]
        lg:top-[7%] lg:left-[55%]
        xl:top-[6%] xl:left-[53%]
        2xl:top-[5%] 2xl:left-[53%]"
        >
          Matches
        </p>

        {/* Card in md-lg-xl */}
        <div
          className="z-10 absolute bg-white shadow shadow-slate-500 left-[9%] top-[17%] rounded-3xl w-[83%] h-[76%]
        sm:left-[34%] sm:h-[70%] sm:w-[58%] sm:top-44
        md:left-[33%] md:h-[70%] md:top-44 
        lg:left-[31%] lg:h-[68%] lg:top-44 
        xl:left-[28%] xl:h-[68%] xl:top-44
        2xl:left-[29%] 2xl:h-[72%] 2xl:top-36"
        >
          <div className="mx-sm:hidden z-10 absolute  bg-white left-[10%] top-[10%] w-[80%] h-[80%]
          sm:top-[20%]
          md:top-[19%]
          lg:top-[20%]
          xl:top-[16%]
          2xl:top-[20%]">
            </div>

    </div>
    <Navbar />
    </>
  )
}

export default Matches