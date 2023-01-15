import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Group85 from "../assets/users/Group85.png";
import { BackgroundCard } from "../components/BackgroundCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const UsersDetails = () => {
  const { id } = useParams();
  const [reportDetail, setReportDetail] = useState({});

  const detailOfUser = async () => {
    const detail = await axios.get(`http://localhost:3001/api/user/${id}`);
    setReportDetail(detail.data);
  };

  useEffect(() => {
    detailOfUser();
  }, []);

  const nameAndLastname = reportDetail.name + " " + reportDetail.lastname;

  return (
    <>
      <div
        className="absolute right-0 w-full h-full bg-gray-200  
      lg:w-full lg:h-full"
      >
        {/* background color */}
        <div
          className="absolute w-full h-56 bg-[#bfd732] rounded-br-3xl 
        sm:w-full sm:h-full sm:rounded-none
        md:w-full md:h-full md:rounded-none
        lg:w-full lg:h-full lg:rounded-none
        xl:w-full xl:h-full xl:rounded-none"
        />
        {/* background white */}
        <BackgroundCard />
        <p
          className="z-20 absolute font-bold text-4xl text-gray-600 left-8 top-10 
        sm:top-[10%] sm:left-[33%] 
        md:top-[8%] md:left-[30%] 
        lg:top-[7%] lg:left-[26%] 
        xl:top-[6%] xl:left-[21%]"
        >
          Reports
        </p>
        <p
          className="absolute font-semibold text-1xl text-gray-600 left-6 top-20 
        sm:top-[15%] sm:left-[34%]
        md:top-[13%] md:left-[30%]
        lg:top-[12%] lg:left-[26%] 
        xl:top-[12%] xl:left-[21%]"
        >
          View all the users
        </p>
        <img
          className="z-20 absolute transform w-64 h-52 right-0 top-4 
          sm:z-30 sm:w-[25%] sm:h-[22%] sm:right-[5%] sm:top-[8%] 
          md:z-30 md:w-[25%] md:h-[29%] md:right-[5%] md:top-[5%] 
          lg:z-30 lg:w-[25%] lg:h-[29%] lg:right-[5%] lg:top-[5%] 
          xl:z-30 xl:w-[23%] xl:h-[40%] xl:right-[3%]"
          src={Group85}
          alt="Maskgroup"
        />
        {/* table list of users */}
        <div
          className="z-20 absolute bg-white shadow left-[4%] top-[17%] w-[91%] rounded-3xl 
        sm:shadow-slate-500 sm:left-[30%] sm:w-[65%] sm:h-[74%] sm:top-[20%]  
        md:shadow-slate-500 md:left-[27%] md:w-[68%] md:h-[74%] md:top-[20%]  
        lg:shadow-slate-500 lg:left-[24%] lg:w-[71%] lg:h-[74%] lg:top-[18%]  
        xl:shadow-slate-500 xl:left-[18.5%] xl:w-[78%] h-[75%] xl:top-[20%]"
        >
          {/* container  */}
          <div className=" z-10 absolute bg-white shadow shadow-slate-500 left-[3%] top-[20%] rounded-3xl w-[94%] h-[75%]">
            <div
              className="relative bg-gray-500 
            md:pl-1 md:border-none md:rounded-t-3xl
            lg:pl-1 lg:py-1 lg:border-none lg:rounded-t-3xl lg:h-7
            xl:pl-1 xl:border-none xl:rounded-t-3xl"
            />
            {/* container description  */}
            <div
              className="absolute container grid-cols-2  w-[full] h-[85%] border border-solid bg-white shadow shadow-slate-500 
            lg:top-[6%]
            "
            >
              <p className="w-9 h-4 ml-14  py-[3%] font-bold">Name</p>
              <p className="w-9 h-4 ml-14  py-[3%] font-bold">Email</p>
              <p className="w-9 h-4 ml-14  py-[3%] font-bold">Language</p>
              <p className="w-9 h-4 ml-14  py-[3%] font-bold">Skills</p>
            </div>

            {/* container details of user */}
            <div
              className="container absolute mx-auto h-[95%]  
            sm:h-[88%] sm:left-2
            md:h-[88%] md:left-2
            lg:h-[88%] lg:left-2 top-[4%]
            xl:h-[88%] 
            "
            >
              <div className="relative space-y-2 flex flex-col">
                <div
                  className="relative  text-gray-700 
                      lg:w-[20%] lg:pt-[0.6%] lg:left-[10%] 
                      xl:w-[20%] xl:pt-[2%] xl:left-[20%]
                      "
                >
                  <p className="font-bold lg:invisible xl:invisible">
                    Name:<>&nbsp;&nbsp;</>
                  </p>
                  {nameAndLastname || "No name added"}
                </div>
                <div
                  className="relative  text-gray-700
                      lg:w-[20%] lg:pt-[0.6%] lg:left-[20%]
                      xl:w-[20%] xl:pt-[1%] xl:left-[20%]
                      "
                >
                  <p className="font-bold lg:invisible xl:invisible">
                    Email:<>&nbsp;&nbsp;</>
                  </p>
                  {reportDetail.email}
                </div>
                <div
                  className="relative  text-gray-700 
                      lg:w-[20%] lg:pt-[0.6%] lg:left-[20%]
                      xl:w-[20%] xl:pt-[1.5%] xl:left-[20%]
                      "
                >
                  <p className="font-bold lg:invisible xl:invisible">
                    Language:<>&nbsp;&nbsp;</>
                  </p>
                  {reportDetail.language || "No language added"}
                </div>
                <div
                  className="relative  text-gray-700
                  lg:w-[20%] lg:pt-[0.6%] lg:left-[20%]
                  xl:w-[20%] xl:pt-[1%] xl:left-[20%]
                  "
                >
                  <p className="font-bold lg:invisible xl:invisible">
                    Skills:<>&nbsp;&nbsp;</>
                  </p>
                  {reportDetail.skill || "No skills added"}
                </div>
                <div className="container flex flex-row space-x-10">
                </div>
              </div>
              <div
                className="relative bg-gray-100 
            sm:rounded-b-3xl sm:w-full sm:top-[91%] sm:h-[9%]
            md:rounded-b-3xl md:w-full md:top-[91%] md:h-[9%]
            lg:rounded-b-3xl lg:w-full lg:top-[99%] lg:h-[10%] 
            xl:rounded-b-3xl xl:w-full xl:top-[30%] xl:h-[10%] xl:-left-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default UsersDetails;
