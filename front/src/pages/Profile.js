import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { Navbar } from "../components/Navbar";
import { BackgroundCard } from "../components/BackgroundCard";
import Maskgrp from "../assets/profile/Maskgrp.png";
import Saly30 from "../assets/profile/Saly30.png";
import doodle51 from "../assets/profile/doodle51.png";
import doodle41 from "../assets/profile/doodle41.png";
import profilePicture from "../assets/profile/ProfileCircle.png"
import { useDispatch} from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "../state/user";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [userInfo, setUserInfo] = React.useState({
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
    pic: /* profilePicture */"",
    skill: "",
  });

  const [userData, setUserData] = React.useState([]);
  // const {register, handleSubmit, reset, formState: { errors }, } = useForm();

  /* con ruta profile/id */
  React.useEffect(() => {
    const getDataUser = async () => {
      const dataUser = await axios.get(
        `http://localhost:3001/api/profile/${id}`
      );
      setUserData(dataUser.data);
    };
    getDataUser();
  }, [id]);

  
  const handleChangeData = (e) => {
    // console.log(e.target.name);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    dispatch(updateUser(userInfo)).then((res) =>
    navigate(`/profile/${res.payload._id}`)
    );
    

  };
  console.log(userData?.age)
  return (
    <>
      
      <img
        className="absolute z-20 max-md:hidden
    md:right-[12%] md:top-[15%] md:h-[25%] 
    lg:right-[14%] lg:top-[10%] lg:h-[30%]
    xl:right-[18%] xl:top-[10%]"
        src={Maskgrp}
        alt="maskgrp"
      />
      <img
        className="absolute z-20 max-md:hidden
    md:left-[30%] md:top-[6%] md:h-[27%]
    lg:left-[30%] lg:top-[6%] lg:h-[32%]
    xl:left-[25%] xl:top-[1%] xl:h-[40%]"
        src={Saly30}
        alt="Saly30"
      />
      <img
        className="absolute z-20 max-md:hidden
    md:left-[25%] md:top-[15%] md:h-[25%]
    lg:left-[25%] lg:top-[15%] lg:h-[28%]
    xl:left-[20%] xl:top-[14%] xl:h-[30%]"
        src={doodle51}
        alt="doodle51"
      />
      <img
        className="absolute z-20 max-md:hidden
          md:right-[6%] md:top-[45%] md:h-[21%]
          lg:right-[8%] lg:top-[45%] lg:h-[25%]
          xl:right-[8%] xl:top-[45%] xl:h-[25%]"
        src={doodle41}
        alt="doodle41"
      />
      {/* profile picture */}
      <img
        className="absolute rounded-full z-20 left-44 top-[10%] h-28 w-28
          sm:left-[70%] sm:top-[14%] sm:h-28 sm:w-28
          md:left-[57%] md:top-[13%] md:h-28 md:w-28
          lg:left-[55%] lg:top-[13%] lg:h-28 lg:w-28
          xl:left-[53%] xl:top-[12%] xl:h-32 xl:w-32
          2xl:left-[51.7%] 2xl:top-[11%] 2xl:h-36 2xl:w-36
          "
        src={userData?.pic || profilePicture}
        alt="profile pic default"
      />
      <div className="absolute right-0 w-full h-full bg-gray-200  
      lg:w-full lg:h-full
      ">
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
          Profile
        </p>

        {/* Picture */}
        {/* <div
          className="z-30 absolute top-16 right-8 h-48 w-48 rounded-full bg-gray-200 
        sm:right-[10%] sm:h-40 sm:w-40 sm:top-[10%]
        md:right-[32%] md:h-28 md:w-28 md:top-[13%]
        lg:right-[36%] lg:h-28 lg:w-28 lg:top-[13%]
        xl:right-[39%] xl:h-28 xl:w-28 xl:top-[12%]
        2xl:right-[39%] 2xl:h-32 2xl:w-32 2xl:top-[12%]"
        /> */}

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

                {/* Buttton pack */}
                {/* bg text and pencil*/}
                  <div
                    className="z-40 absolute flex left-[38%] -top-[32%] bg-gray-200 h-9 w-9 rounded-full
          sm:flex sm:left-[73%] sm:-top-[6%] sm:h-7 sm:w-20 sm:rounded-3xl
          md:flex md:left-[43%] md:-top-[8%] md:h-7 md:w-20 md:rounded-3xl
          lg:flex lg:left-[42%] lg:-top-[8%] lg:h-7 lg:w-20 lg:rounded-3xl
          xl:flex xl:left-[45%] xl:-top-[3%] xl:h-7 xl:w-20 xl:rounded-3xl
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

            {/* Data user container */}
            <div
              className="container absolute mx-auto h-[90%] overflow-y-auto scrollbar-hide top-10 w-5/6
              sm:h-[85%]
              md:h-[84%]
              lg:h-[83%]
              xl:h-[85%]"
            >
              {/* User data */}
              {/* Form */}
              <div
                className="z-30 absolute -top-[5%] left-[20%] 
        sm:left-[20%] sm:top-[6%]
        md:left-[23%] md:top-[18%]
        lg:left-[20%] lg:top-[11%]
        xl:left-[26%] xl:top-[6%]"
              >

                <form className="z-30 absolute" onSubmit={handleUpdate} id="editForm">

                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your name</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="name"
                      placeholder={userData.name || "Add name"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your lastname</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="lastname"
                      placeholder={userData.lastname}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your email</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="email"
                      name="email"
                      placeholder={userData.email}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your password</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="password"
                      name="password"
                      placeholder="*************"
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your age</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="number"
                      name="age"
                      placeholder={userData.age || "Add your age"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your role</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="role"
                      placeholder={userData.role}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your country</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="country"
                      placeholder={userData.country || "Add your country"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your language</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="language"
                      placeholder={userData.language || "Add your language"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your profession</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="profession"
                      placeholder={/* userData.profession || */ "Add your profession"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Your skills</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="text"
                      name="skill"
                      placeholder={userData.skill || "Add your skills"}
                    />
                  </div>
                  <div
                    className="border-b-2 
          md:w-[130%]
          lg:w-[140%]
          xl:w-[190%]"
                  >
                    <p className="font-bold">Select your picture</p>
                    <input
                      onChange={handleChangeData}
                      className="font-bold"
                      type="url"
                      name="pic"
                      placeholder={userData?.pic || "Add your picture"}
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* I don't know */}
            {/* <div
            className="border-b-2 
          md:w-[210%]
          lg:w-[200%]
          xl:w-[300%]"
          /> */}
          </div>
        </div>

        <Navbar />
      </div>
    </>
  );
};

export default Profile;
