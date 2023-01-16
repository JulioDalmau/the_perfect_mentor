import React, { useState } from "react";
import Group86 from "../assets/stadistics/Group86.png";
import Doodle2 from "../assets/home/doodle2.png";
import { Navbar } from "../components/Navbar";
import { BackgroundCard } from "../components/BackgroundCard";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Stadistics = () => {

  const [totalUsers, setTotalUsers] = useState("");
  const [newUsers, setNewUsers] = useState("");
  const [usersMonth, setUsersMonth] = useState("") 

  const data = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    datasets: [
      {
          label: 'SIGN UPS PER MONTH',
          data: [usersMonth.jan,usersMonth.feb, usersMonth.mar, usersMonth.apr, usersMonth.may, usersMonth.jun, usersMonth.jul, usersMonth.aug, usersMonth.sep, usersMonth.oct, usersMonth.nov, usersMonth.dec],
          backgroundColor: '#bfd732'         ,
          borderCOlor: 'black',
          borderWidth: 1,
      }
    ]
  }

  const options = {
    scales: { 
      x: {
          grid: {
            display: false,
          }
      },
      y: {
          grid: {
            display:false,
          }   
      }
  }
  }


  React.useEffect(() => {
    const getUsers = async () => {
      const dataUser = await axios.get(
        "http://localhost:3001/api/stadistics/totalofusers"
      );
      const users = dataUser.data.split(",");
      setTotalUsers(users);
    };

    getUsers();
  }, []);

  React.useEffect(() => {
    const getNewUsers = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/api/stadistics/newusers"
      );
      const mentees = data.newMentee;
      const mentors = data.newMentors;
      const newUsers = data.totalNewUsers;

      setNewUsers({ mentees, mentors, newUsers });
    };

    getNewUsers();
  }, []);

  React.useEffect(() => {
    const getUserPerMonth = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/api/stadistics/signupspermonth"
      );
      setUsersMonth(data);
    };

    getUserPerMonth();
  }, []);



  return (
    <>
      <div className="absolute right-0 w-full h-full bg-gray-200  lg:w-full lg:h-full">
        <div className="absolute w-full h-56 bg-[#bfd732] rounded-br-3xl lg:w-full lg:h-full xl:w-full xl:h-full xl:rounded-none" />
        <BackgroundCard />
        <p className="z-20 absolute font-bold text-4xl text-gray-600 left-8 top-10 lg:top-[7%] lg:left-[26%] xl:top-[6%] xl:left-[21%]">
          Stadistics
        </p>
        <p className="absolute z-20 font-semibold text-1xl text-gray-600 left-6 top-20 lg:top-[12%] lg:left-[26%] xl:top-[12%] xl:left-[21%]">
          Check all the activity of you page
        </p>
        <img
          className="z-30 absolute left-4 top-20 xl:w-[10%] xl:top-[8%] xl:left-[72%]"
          src={Doodle2}
          alt="doodle2"
        />
        <img
          className="z-30 absolute right-0 xl:w-[18%] xl:-top-[4.5%] xl:right-[2%]"
          src={Group86}
          alt="group86"
        />

        <div className="z-20 absolute bg-white shadow  left-[4%] top-[17%] w-[91%] rounded-3xl lg:shadow-slate-500 lg:left-[24%] lg:w-[71%] lg:h-[74%] lg:top-[18%]  xl:shadow-slate-500 xl:left-[18.5%] xl:w-[78%] h-[75%] xl:top-[20%]">

          
            {/* Division line 1*/}
            {/* <div className="absolute w-[10%] border-t-0 border-dotted border-gray-600 border-2 top-20 right-4 xl:w-[10%] xl:left-[4%] xl:top-[24%]" /> */}
            {/* Division line 2*/}
            {/* <div className="relative w-[10%] border-t-0 border-dotted border-gray-400 border-2 top-20 right-4 xl:w-[10%] xl:left-[14%] xl:top-[28%]" /> */}
            {/* Division line 3*/}
            {/* <div className="relative w-[10%] border-t-0 border-dotted border-gray-400 border-2 top-20 right-4 xl:w-[10%] xl:left-[14%] xl:top-[28%]" /> */}



          <div className="absolute top-5 left-5 h-36 w-36 rounded-2xl bg-gray-200 xl:w-[48%] xl:top-[19%]">
            
          </div>
        






          <div className="absolute top-5 left-6 h-36 w-36 rounded-2xl bg-gray-200 xl:w-[45%] xl:top-[19%]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-2 rounded-l-lg text-lg ">
                      TOTAL OF USERS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" dark:bg-gray-800 relative ">
                    <th
                      scope="row"
                      className="px-6 py-1 text-gray-900 whitespace-nowrap text-base"
                    >
                      Memtees
                    </th>
                    <td className="px-6 py-1 relative left-20">
                      {totalUsers[0]}
                    </td>
                  </tr>
                  <tr className=" dark:bg-gray-800 ">
                    <th
                      scope="row"
                      className="px-6 py-1  text-gray-900 whitespace-nowrap text-base"
                    >
                      Mentors
                    </th>
                    <td className="relative left-20 px-6 py-1">
                    {totalUsers[1]}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900">
                    <th scope="row" className="px-6 py-1 text-base ">
                      Total users
                    </th>
                    <td className="px-6 py-1 relative left-20">
                    {totalUsers[2]}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>







          <div className="absolute top-5 right-5 h-36 w-36 rounded-2xl bg-gray-200 xl:w-[45%] xl:top-[19%]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-2 rounded-l-lg text-lg ">
                      NEW USERS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" dark:bg-gray-800 relative ">
                    <th
                      scope="row"
                      className="px-6 py-1 text-gray-900 whitespace-nowrap text-base"
                    >
                      New mentees
                    </th>
                    <td className="px-6 py-1 relative left-20">
                      {newUsers.mentees}
                    </td>
                  </tr>
                  <tr className=" dark:bg-gray-800 ">
                    <th
                      scope="row"
                      className="px-6 py-1  text-gray-900 whitespace-nowrap text-base"
                    >
                      New mentors
                    </th>
                    <td className="relative left-20 px-6 py-1">
                      {newUsers.mentors}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900">
                    <th scope="row" className="px-6 py-1 text-base ">
                      Total users
                    </th>
                    <td className="px-6 py-1 relative left-20">
                      {newUsers.newUsers}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>


          <div className="absolute top-44 left-5 h-80 w-80 rounded-2xl bg-gray-200 xl:w-[97%] xl:h-[48%] xl:top-[49%]">
        <div className="relative h-full w-full">

            <Bar  style={ {width: '800px', margin: "auto"} } data={data} options={options}/>
        </div>


          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Stadistics;
