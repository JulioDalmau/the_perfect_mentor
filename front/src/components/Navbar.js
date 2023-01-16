import React from "react";
import axios from "axios";
import Vector from "../assets/home/Vector.png";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiBarChart } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {AiOutlineSolution} from 'react-icons/ai'
import {HiAcademicCap} from 'react-icons/hi'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies([]);

  React.useEffect(() => {
    const verify = async () => {
      if (!cookie.token) {
        navigate("/login");
      }
    };
    verify();
  }, [cookie, navigate, removeCookie]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/logout"
      );
      removeCookie("token");
      navigate("/login");

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img
        className="absolute max-sm:hidden 
    sm:left-[3%] sm:w-[22%] sm:top-[9%] 
    md:left-[2%] md:w-[22%] md:top-[9%] 
    lg:left-[2%] lg:w-[19%] lg:top-[9%] 
    xl:left-[2%] xl:w-[14%] xl:top-[9%]"
        src={Vector}
        alt="title"
      />
      {/* Background barra */}
      <div
        className="z-20 absolute w-full h-20 bottom-0 bg-gray-700 rounded-t-3xl
    sm:bg-transparent sm:w-[14%] sm:top-[25%] sm:flex sm:flex-col sm:h-[75%]
    md:bg-transparent md:w-[14%] md:top-[25%] md:flex md:flex-col md:h-[75%]
    lg:bg-transparent lg:w-[14%] lg:top-[25%] lg:flex lg:flex-col lg:h-[75%]
    xl:bg-transparent xl:w-[14%] xl:top-[25%] xl:flex xl:flex-col xl:h-[75%]"
      >
        {/* Icons space */}
        <div
          className="absolute top-6 space-x-14 left-9
      max-sm:flex  
      sm:flex sm:flex-col sm:space-y-20 sm:left-[0%]
      md:flex md:flex-col md:space-y-20 md:left-[0%]
      lg:flex lg:flex-col lg:space-y-20 lg:left-[0%]
      xl:flex xl:flex-col xl:space-y-20 xl:left-[0%]"
        >
          {/* icons */}
          <div className="sm:flex md:flex lg:flex xl:flex">
            <Link to="/users">
              <button
                className="absolute text-[#bfd732] 
          sm:text-gray-700 sm:pr-44 sm:left-[6%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:-top-6
          md:text-gray-700 md:pr-44 md:left-[6%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:-top-6
          lg:text-gray-700 lg:pr-44 lg:left-[6%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:-top-6  
          xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:-top-6"
              >
                <FiUsers size={38} />
                <p
                  className="max-sm:hidden absolute
          sm:top-6 sm:left-[29%] sm:font-semibold
          md:top-6 md:left-[29%] md:font-semibold
          lg:top-6 lg:left-[29%] lg:font-semibold
          xl:top-6 xl:left-[29%] xl:font-semibold"
                >
                  Users
                </p>
              </button>
            </Link>
          </div>
          {user.user?.role === "admin" ? (
            <>
              <div className="sm:flex md:flex lg:flex xl:flex ">
                <Link to="/stadistics">
                  <button
                    className="absolute text-[#bfd732] 
                sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-8 sm:mt-5
                md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-8 md:mt-5
                lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-8 lg:mt-5
                xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-8 xl:mt-5"
                  >
                    <HiOutlineDocumentReport size={38} />
                    <p
                      className="max-sm:hidden absolute 
                  sm:top-7 sm:left-[29%] sm:font-semibold 
                  md:top-7 md:left-[29%] md:font-semibold 
                  lg:top-7 lg:left-[29%] lg:font-semibold 
                  xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      Stadistics
                    </p>
                  </button>
                </Link>
              </div>
              <div className="sm:flex md:flex lg:flex xl:flex">
                <Link to="/reports">
                  <button
                    className="absolute text-[#bfd732] 
          sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-28 sm:mt-5
          md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-28 md:mt-5
          lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-28 lg:mt-5
          xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-28 xl:mt-5"
                  >
                    <BiBarChart size={38} />
                    <p
                      className="max-sm:hidden absolute 
          sm:top-7 sm:left-[29%] sm:font-semibold
          md:top-7 md:left-[29%] md:font-semibold
          lg:top-7 lg:left-[29%] lg:font-semibold
          xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      Reports
                    </p>
                  </button>
                </Link>
              </div>
            </>
          ) : user.user?.role === "mentee" ? (
            <>
              <div className="sm:flex md:flex lg:flex xl:flex ">
                <Link to="/matches">
                  <button
                    className="absolute text-[#bfd732] 
                sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-8 sm:mt-5
                md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-8 md:mt-5
                lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-8 lg:mt-5
                xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-8 xl:mt-5"
                  >
                    <MdOutlineConnectWithoutContact size={38} />
                    <p
                      className="max-sm:hidden absolute 
                  sm:top-7 sm:left-[29%] sm:font-semibold 
                  md:top-7 md:left-[29%] md:font-semibold 
                  lg:top-7 lg:left-[29%] lg:font-semibold 
                  xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      Matches
                    </p>
                  </button>
                </Link>
              </div>

              <div className="sm:flex md:flex lg:flex xl:flex">
                <Link to="/myprogress">
                  <button
                    className="absolute text-[#bfd732] 
           sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-28 sm:mt-5
           md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-28 md:mt-5
           lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-28 lg:mt-5
           xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-28 xl:mt-5"
                  >
                    <HiAcademicCap size={38} />
                    <p
                      className="max-sm:hidden absolute 
           sm:top-7 sm:left-[29%] sm:font-semibold
           md:top-7 md:left-[29%] md:font-semibold
           lg:top-7 lg:left-[29%] lg:font-semibold
           xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      My progress
                    </p>
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="sm:flex md:flex lg:flex xl:flex ">
                <Link to="/matches">
                  <button
                    className="absolute text-[#bfd732] 
                sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-8 sm:mt-5
                md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-8 md:mt-5
                lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-8 lg:mt-5
                xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-8 xl:mt-5"
                  >
                    <MdOutlineConnectWithoutContact size={38} />
                    <p
                      className="max-sm:hidden absolute 
                  sm:top-7 sm:left-[29%] sm:font-semibold 
                  md:top-7 md:left-[29%] md:font-semibold 
                  lg:top-7 lg:left-[29%] lg:font-semibold 
                  xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      Matches
                    </p>
                  </button>
                </Link>
              </div>

              <div className="sm:flex md:flex lg:flex xl:flex">
                <Link to="/mymentees">
                  <button
                    className="absolute text-[#bfd732] 
                 sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-28 sm:mt-5
                 md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-28 md:mt-5
                 lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-28 lg:mt-5
                 xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-28 xl:mt-5"
                  >
                    <AiOutlineSolution size={38} />
                    <p
                      className="max-sm:hidden absolute 
           sm:top-7 sm:left-[29%] sm:font-semibold
           md:top-7 md:left-[29%] md:font-semibold
           lg:top-7 lg:left-[29%] lg:font-semibold
           xl:top-7 xl:left-[29%] xl:font-semibold"
                    >
                      My mentees
                    </p>
                  </button>
                </Link>
              </div>
            </>
          )}

          <div className="sm:flex md:flex lg:flex xl:flex">
            {user._id ? (
              <Link to={`/profile/${user._id}`}>
                <button
                  className="absolute text-[#bfd732] 
              sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-48 sm:mt-5
              md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-48 md:mt-5
              lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-48 lg:mt-5
              xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-48 xl:mt-5"
                >
                  <BiUser size={38} />
                  <p
                    className="max-sm:hidden absolute 
                sm:top-7 sm:left-[29%] sm:font-semibold 
                md:top-7 md:left-[29%] md:font-semibold 
                lg:top-7 lg:left-[29%] lg:font-semibold 
                xl:top-7 xl:left-[29%] xl:font-semibold"
                  >
                    Profile
                  </p>
                </button>
              </Link>
            ) : (
              <Link to={`/profile/${user.user._id}`}>
                <button
                  className="absolute text-[#bfd732] 
                  sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-48 sm:mt-5
                  md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-48 md:mt-5
                  lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-48 lg:mt-5
                  xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-48 xl:mt-5"
                >
                  <BiUser size={38} />
                  <p
                    className="max-sm:hidden absolute 
                    sm:top-7 sm:left-[29%] sm:font-semibold 
                    md:top-7 md:left-[29%] md:font-semibold 
                    lg:top-7 lg:left-[29%] lg:font-semibold 
                    xl:top-7 xl:left-[29%] xl:font-semibold"
                  >
                    Profile
                  </p>
                </button>
              </Link>
            )}
          </div>
          <div className="sm:flex md:flex lg:flex xl:flex">
            <button
              className="absolute text-[#bfd732] 
            sm:text-gray-700 sm:pr-44 sm:left-[5%] sm:w-64 sm:pl-3 sm:hover:bg-gray-700 sm:hover:text-[#bfd732] sm:pt-5 sm:pb-5 sm:top-96 sm:mt-5
            md:text-gray-700 md:pr-44 md:left-[5%] md:w-64 md:pl-3 md:hover:bg-gray-700 md:hover:text-[#bfd732] md:pt-5 md:pb-5 md:top-96 md:mt-5
            lg:text-gray-700 lg:pr-44 lg:left-[5%] lg:w-64 lg:pl-3 lg:hover:bg-gray-700 lg:hover:text-[#bfd732] lg:pt-5 lg:pb-5 lg:top-96 lg:mt-5
            xl:text-gray-700 xl:pr-44 xl:left-[5%] xl:w-64 xl:pl-3 xl:hover:bg-gray-700 xl:hover:text-[#bfd732] xl:pt-5 xl:pb-5 xl:top-96 xl:mt-5"
              onClick={handleLogout}
              to="/"
            >
              <RiLogoutCircleRLine size={38} />
              <p
                className="max-sm:hidden absolute 
          sm:top-6 sm:left-[29%] sm:font-semibold
          md:top-6 md:left-[29%] md:font-semibold
          lg:top-6 lg:left-[29%] lg:font-semibold
          xl:top-6 xl:left-[29%] xl:font-semibold"
              >
                Log out
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
