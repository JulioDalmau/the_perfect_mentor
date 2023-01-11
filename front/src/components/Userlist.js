import React from "react";
import { useSelector } from "react-redux";
import MentorFilter from "./MentorsFilter";
import MenteeFilter from "./MenteeFilter";

const Userlist = () => {

  const user = useSelector((state) => state.user);
  const userRole = user.user?.role
 
  return (

    <> 
      {(userRole) ? 
      (userRole === "mentor") ? <MentorFilter /> : <MenteeFilter /> :
      (userRole === "mentor") ? <MentorFilter /> : <MenteeFilter />}

    </>

  );
};

export default Userlist;
