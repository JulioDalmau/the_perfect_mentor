import React from "react";
import { Navbar } from "../components/Navbar";
import { BackgroundCard } from "../components/BackgroundCard";
import Group85 from "../assets/users/Group85.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Result = () => {
  const user = useSelector((state) => state.user);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const {
    state: { result },
  } = useLocation();
  const filterResult = result.filter((item) => item.role !== user.user?.role);

  const onSubmit = async (data) => {
    try {
      const resp = await axios.get(
        `http://localhost:3001/api/user/search/${data.searchInput}`
      );
      const result = await resp.data;
      navigate(`/reports/results`, { state: { result } });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="absolute right-0 w-full h-full bg-gray-200  lg:w-full lg:h-full">
        <div className="absolute w-full h-56 bg-[#bfd732] rounded-br-3xl lg:w-full lg:h-full xl:w-full xl:h-full xl:rounded-none" />
        <BackgroundCard />
        <p className="z-20 absolute font-bold text-4xl text-gray-600 left-8 top-10 lg:top-[7%] lg:left-[26%] xl:top-[6%] xl:left-[21%]">
          Results
        </p>
        <img
          className="z-30 absolute transform w-64 h-52 right-0 top-4 lg:w-[25%] lg:h-[29%] lg:right-[5%] lg:top-[5%] xl:w-[23%] xl:h-[40%] xl:right-[3%]"
          src={Group85}
          alt="Maskgroup"
        />
        <div className="z-20 absolute bg-white shadow  left-[4%] top-[17%] w-[91%] rounded-3xl lg:shadow-slate-500 lg:left-[24%] lg:w-[71%] lg:h-[74%] lg:top-[18%]  xl:shadow-slate-500 xl:left-[18.5%] xl:w-[78%] h-[75%] xl:top-[20%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="z-40 absolute py-4 pl-14 pr-16 bg-white h-12 w-76 rounded-full top-[-4%] shadow shadow-slate-500 left-[11%] lg:left-[3%] lg:top-[5%] xl:left-[3%] xl:top-[5%]"
              label="searchInput"
              name="searchInput"
              placeholder="search for skills"
              {...register("searchInput")}
            />
          </form>
          <div className=" z-10 absolute bg-white shadow shadow-slate-500 left-[3%] top-[20%] rounded-3xl w-[94%] h-[75%]">
            <div
              className="relative bg-gray-100 text-opacity-50 
            lg:pl-1 lg:border-none lg:rounded-t-3xl
            xl:pl-1 xl:border-none xl:rounded-t-3xl"
            >
              <div
                className="max-lg:hidden text-gray-700 text-opacity-50 flex flex-row 
              lg:pl-[3%] lg:pt-2 lg:pb-2 
              xl:pl-[3%] xl:pt-2 xl:pb-2"
              >
                {/* title list */}
                <p className="w-9 h-4 text-sm pr-[19%]">Name</p>
                <p className="w-9 h-4 text-sm pr-[6%]">Age</p>
                <p className="w-9 h-4 text-sm pr-[27%]">Email</p>
                <p className="w-9 h-4 text-sm pr-[10%]">Role</p>
                <p className="h-4 text-sm pr-[12%]">Joined date</p>
                <p className="w-9 h-4 text-sm">Status</p>
              </div>
            </div>

            {/* container list of users */}
            <div className="container mx-auto  h-[80%] overflow-y-auto scrollbar-hide ">
              <div className="">
                {filterResult.map((eachUser, i) => {
                  const key = filterResult[i]._id;
                  return (
                    <div key={key} className="relative lg:border xl:border ">
                      <Link
                        to={`/reports/${filterResult[i]?._id}`}
                        className="relative flex flex-col border rounded-3xl w-[95%] py-2 mx-2 my-2 space-x-5
                      lg:border-none lg:rounded-none lg:flex-row  lg:-ml-10 lg:pt-[0.5%] lg:pb-[1.5%] 
                      xl:border-none xl:rounded-none xl:flex-row  xl:-ml-8 xl:pt-[0.5%] xl:pb-[1.5%] xl:top-2"
                      >
                        <div
                          className="flex flex-row relative left-5 text-sm text-gray-700 
                        lg:w-[20%] lg:pt-[0.1%] 
                        xl:w-[20%] xl:pt-[0.1%] "
                        >
                          <p className="font-bold lg:invisible xl:invisible">
                            Name:<>&nbsp;&nbsp;</>
                          </p>
                          {eachUser.name} {eachUser.lastname}
                        </div>
                        <div
                          className="flex flex-row text-sm text-gray-700
                        lg:w-[3%] lg:font-bold 
                        xl:w-[4%] xl:font-bold "
                        >
                          <p className="font-bold lg:invisible xl:invisible">
                            Age:<>&nbsp;&nbsp;</>
                          </p>
                          {eachUser.age}
                        </div>
                        <div
                          className="flex flex-row text-sm text-gray-700 
                        lg:w-[25%] lg:font-bold
                        xl:w-[26%] xl:font-bold "
                        >
                          <p className="font-bold lg:invisible xl:invisible">
                            Email:<>&nbsp;&nbsp;</>
                          </p>
                          {eachUser.email}
                        </div>
                        <div
                          className="flex flex-row text-sm text-gray-700
                        lg:w-[6%] lg:font-bold
                        xl:w-[6%] xl:font-bold "
                        >
                          <p className="font-bold lg:invisible xl:invisible">
                            Role:<>&nbsp;&nbsp;</>
                          </p>
                          {eachUser.role}
                        </div>
                        <div
                          className="flex flex-row text-sm text-gray-700
                        lg:w-[18%] lg:font-bold
                        xl:w-[18%] xl:font-bold "
                        >
                          <p className="font-bold lg:invisible xl:invisible">
                            Joinded data:<>&nbsp;&nbsp;</>
                          </p>
                          {eachUser.date.substring(0, 10)}
                        </div>
                        <div className=" xl:w-[5%] text-sm font-bold  text-gray-700">
                          {eachUser.verified}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="absolute bg-gray-100 
            lg:rounded-b-3xl lg:w-full lg:top-[91%] lg:h-[9%]
            xl:rounded-b-3xl xl:w-full xl:top-[90%] xl:h-[10%]"
            />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Result;
