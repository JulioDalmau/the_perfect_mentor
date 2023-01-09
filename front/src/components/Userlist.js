import React from "react";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUsers = async () => {
      const dataUser = await axios.get("http://localhost:3001/api/user/");
      setUsers(dataUser.data);
    };

    getUsers();
  }, []);

  return (
    <>
      {users.map((eachUser) => {
        const key = eachUser._id;
        return (
          <div key={key} className="relative lg:border xl:border ">
            <table
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
              {/* en todo caso agregar container a los div de abajo */}
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
                {eachUser.createdAt}
              </div>
              <div className=" xl:w-[5%] text-sm font-bold  text-gray-700">
                {eachUser.verified}
              </div>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Userlist;
