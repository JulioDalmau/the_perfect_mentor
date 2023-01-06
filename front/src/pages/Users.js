import React from "react";
import Group85 from "../assets/users/Group85.png";
import { Navbar } from "../components/Navbar";
import { BackgroundCard } from "../components/BackgroundCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("")

 const navigate = useNavigate()

  React.useEffect(() => {
    const getUsers = async () => {
      const dataUser = await axios.get("http://localhost:3001/api/user/");
      setUsers(dataUser.data);
    };

    getUsers();
  }, []);

  const usersList = users.map((eachUser) => {
    return (
      <>
        <div className="relative lg:border xl:border ">
          <table className="relative flex flex-col border rounded-3xl w-[95%] py-2 mx-2 my-2 space-x-5
          lg:border-none lg:rounded-none lg:flex-row  lg:-ml-10 lg:pt-[0.5%] lg:pb-[1.5%] 
          xl:border-none xl:rounded-none xl:flex-row  xl:-ml-8 xl:pt-[0.5%] xl:pb-[1.5%] xl:top-2">
            <div className="flex flex-row relative left-5 text-sm text-gray-700 
            lg:w-[20%] lg:pt-[0.1%] 
            xl:w-[20%] xl:pt-[0.1%] ">
              <p className="font-bold lg:invisible xl:invisible">
                Name:<>&nbsp;&nbsp;</>
              </p>
              {eachUser.name} {eachUser.lastname}
            </div>
            {/* en todo caso agregar container a los div de abajo */}
            <div className="flex flex-row text-sm text-gray-700
            lg:w-[3%] lg:font-bold 
            xl:w-[4%] xl:font-bold ">
              <p className="font-bold lg:invisible xl:invisible">
                Age:<>&nbsp;&nbsp;</>
              </p>
              {eachUser.age}
            </div>
            <div className="flex flex-row text-sm text-gray-700 
            lg:w-[25%] lg:font-bold
            xl:w-[26%] xl:font-bold ">
              <p className="font-bold lg:invisible xl:invisible">
                Email:<>&nbsp;&nbsp;</>
              </p>
              {eachUser.email}
            </div>
            <div className="flex flex-row text-sm text-gray-700
            lg:w-[6%] lg:font-bold
            xl:w-[6%] xl:font-bold ">
              <p className="font-bold lg:invisible xl:invisible">
                Role:<>&nbsp;&nbsp;</>
              </p>
              {eachUser.role}
            </div>
            <div className="flex flex-row text-sm text-gray-700
            lg:w-[18%] lg:font-bold
            xl:w-[18%] xl:font-bold ">
              <p className="font-bold lg:invisible xl:invisible">
                Joinded data:<>&nbsp;&nbsp;</>
              </p>
              {eachUser.createdAt}
            </div>
            <div className=" xl:w-[5%] text-sm font-bold  text-gray-700">
              {eachUser.verified}
            </div>
          </table>
        </div>
      </>
    );
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(search)
    const resp = await axios.get(`http://localhost:3001/api/user/search/${search}`)
    console.log(search)
    console.log(resp.data[0].name)
    setSearch(resp)
    navigate(`/result/${resp.data[0].name}`)
    
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <>
      <div className="absolute right-0 w-full h-full bg-gray-200  
      lg:w-full lg:h-full"
      >
        {/* background color */}
        <div className="absolute w-full h-56 bg-[#bfd732] rounded-br-3xl 
        sm:w-full sm:h-full sm:rounded-none
        md:w-full md:h-full md:rounded-none
        lg:w-full lg:h-full lg:rounded-none
        xl:w-full xl:h-full xl:rounded-none" />
        <BackgroundCard />
        {/* background white */}
        {/* <div className="z-10 absolute bg-white w-11/12 h-3/4 rounded-t-3xl left-4 top-36 lg:w-[1300px] lg:h-[700px] lg:left-64 lg:top-9 xl:w-[81%] xl:h-[90%] xl:rounded-3xl"> */}
        {/* <div className="absolute bg-gray-100 rounded-tl-3xl rounded-tr-3xl xl:w-full xl:h-[25%]" /> */}
        <p className="z-20 absolute font-bold text-4xl text-gray-600 left-8 top-10 
        sm:top-[10%] sm:left-[33%] 
        md:top-[8%] md:left-[30%] 
        lg:top-[7%] lg:left-[26%] 
        xl:top-[6%] xl:left-[21%]">
          Users
        </p>
        <p className="absolute font-semibold text-1xl text-gray-600 left-6 top-20 
        sm:top-[15%] sm:left-[34%]
        md:top-[13%] md:left-[30%]
        lg:top-[12%] lg:left-[26%] 
        xl:top-[12%] xl:left-[21%]">
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
        {/* <div className=" max-xl:hidden z-0 absolute bg-white shadow shadow-slate-500 left-[3%] top-[20%] rounded-3xl w-[94%] h-[75%]"> */}
        <div className="z-20 absolute bg-white shadow  left-[4%] top-[17%] w-[91%] rounded-3xl 
        sm:shadow-slate-500 sm:left-[30%] sm:w-[65%] sm:h-[74%] sm:top-[20%]  
        md:shadow-slate-500 md:left-[27%] md:w-[68%] md:h-[74%] md:top-[20%]  
        lg:shadow-slate-500 lg:left-[24%] lg:w-[71%] lg:h-[74%] lg:top-[18%]  
        xl:shadow-slate-500 xl:left-[18.5%] xl:w-[78%] h-[75%] xl:top-[20%]">
          {/* <div className="z-30 absolute top-[10%] left-[8%] xl:h-[80%] xl:left-[2%] xl:top-[5%]"> */}
            {/* Search user */}
          <form onSubmit={handleSubmit}>
            {/* Search */}
            <input
              onChange={handleOnChange}
              className="z-40 absolute py-4 pl-14 pr-16 bg-white h-14 w-64 rounded-full top-[-4%] shadow shadow-slate-500 left-[8%] 
              sm:left-[3%] sm:top-[5%] sm:w-60
              md:left-[3%] md:top-[5%] 
              lg:left-[3%] lg:top-[5%] lg:w-64
              xl:left-[3%] xl:top-[5%] xl:w-72"
              type="text"
              value={search}
              placeholder="search for users"
            />
          </form>

          <div className=" z-10 absolute bg-white shadow shadow-slate-500 left-[3%] top-[20%] rounded-3xl w-[94%] h-[75%]">
            <div className="relative bg-gray-100 text-opacity-50 
            md:pl-1 md:border-none md:rounded-t-3xl
            lg:pl-1 lg:border-none lg:rounded-t-3xl
            xl:pl-1 xl:border-none xl:rounded-t-3xl">
              {/* categories top */}
              <div className="max-lg:hidden text-gray-700 text-opacity-50 flex flex-row 
              lg:pl-[3%] lg:pt-2 lg:pb-2 
              xl:pl-[3%] xl:pt-2 xl:pb-2">
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
            <div className="container absolute mx-auto  h-[95%] overflow-y-auto scrollbar-hide 
            sm:h-[88%] sm:left-2
            md:h-[88%] md:left-2
            lg:h-[88%] lg:left-0
            xl:h-[88%] 
            ">
              <div className="" >{usersList}</div>
            </div>
            <div className="absolute bg-gray-100 
            sm:rounded-b-3xl sm:w-full sm:top-[91%] sm:h-[9%]
            md:rounded-b-3xl md:w-full md:top-[91%] md:h-[9%]
            lg:rounded-b-3xl lg:w-full lg:top-[91%] lg:h-[9%]
            xl:rounded-b-3xl xl:w-full xl:top-[90%] xl:h-[10%]" />
          </div>
        </div>
        {/* </div> */}
      </div>
      <Navbar />
    </>
  );
};

export default Users;
