import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Group85 from "../assets/users/Group85.png";
import { BackgroundCard } from "../components/BackgroundCard";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../state/user";
import profilePicture from "../assets/profile/ProfileCircle.png";
import { BiPencil } from "react-icons/bi";

const UsersDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportDetail, setReportDetail] = useState({});
  const [userInfo, setUserInfo] = useState({
    id: id,
    name: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
    role: "",
    country: "",
    language: "",
    profession: "",
    pic: "",
    skill: "",
  });

  const detailOfUser = async () => {
    const detail = await axios.get(`http://localhost:3001/api/user/${id}`);
    setReportDetail(detail.data);
  };

  useEffect(() => {
    detailOfUser();
  }, []);

  const handleChangeData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    dispatch(updateUser(userInfo)).then((res) =>
      navigate(`/reports/${res.payload._id}`)
    );
  };

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
          {/* Buttton pack */}
          {/* bg text and pencil*/}
          <div
            className="z-40 absolute flex left-[38%] -top-[32%] bg-gray-200 h-9 w-9 rounded-full
          sm:flex sm:left-[73%] sm:-top-[6%] sm:h-7 sm:w-20 sm:rounded-3xl
          md:flex md:left-[43%] md:-top-[8%] md:h-7 md:w-20 md:rounded-3xl
          lg:flex lg:left-[42%] lg:-top-[8%] lg:h-7 lg:w-20 lg:rounded-3xl
          xl:flex xl:left-[5%] xl:top-[5%] xl:h-7 xl:w-20 xl:rounded-3xl
          2xl:flex 2xl:left-[42%] 2xl:-top-[4%] 2xl:h-8 2xl:w-20 2xl:rounded-3xl"
          >
            <button onClick={handleUpdate} type="submit" form="editForm">
              {/* Text and pencil */}
              <div
                className="absolute flex top-[22%] left-[13%]
              sm:flex sm:flex-row sm:space-x-5 sm:top-[8%] sm:left-[11%]
              md:flex md:flex-row md:space-x-5 md:top-[8%] md:left-[11%]
              lg:flex lg:flex-row lg:space-x-5 lg:top-[8%] lg:left-[11%]
              xl:flex xl:flex-row xl:space-x-5 xl:top-[10%] xl:left-[13%]"
              >
                <p className="max-sm:hidden font-semibold">Edit</p>
                <BiPencil size={21} />
              </div>
            </button>
          </div>

          <img
            className="absolute rounded-full z-20 left-44 top-[10%] h-28 w-28
          sm:left-[70%] sm:top-[14%] sm:h-28 sm:w-28
          md:left-[57%] md:top-[13%] md:h-28 md:w-28
          lg:left-[55%] lg:top-[13%] lg:h-28 lg:w-28
          xl:left-[72%] xl:top-[1%] xl:h-32 xl:w-32
          2xl:left-[72%] 2xl:top-[1%] 2xl:h-36 2xl:w-36
          "
            src={reportDetail?.pic || profilePicture}
            alt="profile pic default"
          />
          {/* container  */}
          <div className=" z-10 absolute bg-white shadow shadow-slate-500 left-[3%] top-[20%] rounded-3xl w-[94%] h-[75%]">
            <div
              className="relative bg-gray-100 
            md:pl-1 md:border-none md:rounded-t-3xl
            lg:pl-1 lg:py-1 lg:border-none lg:rounded-t-3xl lg:h-7
            xl:pl-1 xl:border-none xl:rounded-t-3xl"
            />

            <div class="relative overflow-x-auto">
              <form action="">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Name
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="name"
                          placeholder={reportDetail?.name || "No name"}
                        />
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Lastname
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="lastname"
                          placeholder={reportDetail?.lastname || "No lastname"}
                        />
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Email
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="email"
                          name="email"
                          placeholder={reportDetail?.email}
                        />
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Password
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="password"
                          name="password"
                          placeholder="*************"
                        />
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Age
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="number"
                          name="age"
                          placeholder={reportDetail?.age || "No age"}
                        />
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Role
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="role"
                          placeholder={reportDetail?.role}
                        />
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Country
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="country"
                          placeholder={reportDetail?.country || "No country"}
                        />
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Language
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="language"
                          placeholder={reportDetail?.language || "No language"}
                        />
                      </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Profession
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="text"
                          name="profession"
                          placeholder={
                            reportDetail?.profession || "No profession"
                          }
                        />
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Pic
                      </th>
                      <td class="px-6 py-4">
                        <input
                          onChange={handleChangeData}
                          className="font-bold"
                          type="url"
                          name="pic"
                          placeholder={reportDetail?.pic || "No pic"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default UsersDetails;
