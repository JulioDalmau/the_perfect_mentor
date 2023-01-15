import React, {useEffect, useState} from "react";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import Vector from "../assets/home/Vector.png";
import Saly2 from "../assets/loginsignup/Saly2.png"
import Maskgroup from '../assets/loginsignup/Maskgroup.png'
import Doodle42 from '../assets/loginsignup/doodle42.png'
import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios'
// import { UserAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../state/user";



const Login = () => {
  // const {logIn} = UserAuth()
  // const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
      email: "",
      password: "",
    });

  const { register, handleSubmit, formState: { errors }, } = useForm();

  // const generateError = (err) => {}
    // toast.error(err, {
    //   position: "top-center",}      );

    /* con authcontext */
    // const handleOnChange = (e) => {
    //   setValues({ ...values, [e.target.name]: e.target.value });
    // };
  
    /* con authcontext */ 
  // const handleSubmit = async (e) => {
  //     e.preventDefault()    
    
  //     try {
      // const { data } = await axios.post(
      //   "http://localhost:3001/api/auth/login",
      //   { ...values },
      //   { withCredentials: true },
        
      // );

      
      /* con authcontext */
      // const data = await logIn(values.email, values.password)

      // const res = await axios.get(`http://localhost:3001/api/profile/${data.id._id}`)

      

      // if (data) {
      //   if (data.errors) {
      //     const { email, password } = data.errors;
      //      if (email) generateError(email);
      //     else if (password) generateError(password);
      //   } else {
          
      //     // navigate(`/profile/${data.id._id}`);
      //     navigate('/profile');
      //   } 
      // } 
      
      // return res
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = (data) => {
    dispatch(sendLoginRequest(data))
    .then(({ payload }) => {
      if (payload) {
          localStorage.setItem("user", JSON.stringify(payload));
          navigate(`/profile/${payload.user._id}`)
        }
      })
      .catch(() => navigate("/404"));
  };



  return (
    <>
    <div className="absolute bg-[#bfd732] w-full h-full"/>
      <img
        className="absolute -rotate-90 w-[30%] h-[15%] right-[7%] top-[10%] 
        sm:top-[8%] sm:-rotate-90 sm:h-[18%] sm:w-[30%] sm:left-[60%]
        md:top-[32%] md:rotate-180 md:h-[18%] md:w-[10%] md:left-[39%]
        lg:top-[32%] lg:rotate-180 lg:h-[18%] lg:w-[10%] lg:left-[40%]
        xl:top-[35%] xl:rotate-180 xl:h-[20%] xl:w-[10%] xl:left-[40%]
        2xl:top-[35%] 2xl:rotate-180 2xl:h-[20%] 2xl:w-[10%] 2xl:left-[41%]
        "
        src={Doodle1}
        alt="doodle1"
      />
      <img
        className="z-20 transform absolute rotate-180 w-[43%] h-[20%] left-[35%] -top-9 
        sm:rotate-180 sm:w-[40%] sm:h-[20%] sm:-top-[4%] sm:left-[39%]
        md:-rotate-12 md:w-[16%] md:h-[25%] md:top-[9%] md:left-[33%]
        lg:-rotate-12 lg:w-[15%] lg:h-[25%] lg:top-[10%] lg:left-[34%]
        xl:-rotate-12 xl:w-[13%] xl:h-[25%] xl:top-[12%] xl:left-[38%]
        2xl:-rotate-12 2xl:w-[11%] 2xl:h-[24%] 2xl:top-[12%] 2xl:left-[40%]
        "
        src={Doodle2}
        alt="doodle2"
      />
      {/* title */}
      <img
        className="transform absolute top-16 left-7 w-52 
        sm:left-[10%] sm:w-52 sm:top-[7%]
        md:left-[56%] md:w-44 md:top-[9%]
        lg:left-[56%] lg:w-44 lg:top-[9%]
        xl:left-[52%] xl:w-48 xl:top-[9%]
        2xl:left-[55%] 2xl:w-48 2xl:top-[9%]"
        src={Vector}
        alt="title"
      />
      <img className="max-md:hidden absolute 
      md:left-[7%] md:h-[53%] md:w-[50%] md:top-[18%]
      lg:left-[11%] lg:h-[53%] lg:w-[45%] lg:top-[19%]
      xl:left-[18%] xl:h-[59%] xl:w-[36%] xl:top-36
      2xl:left-[21%] 2xl:h-[59%] 2xl:w-[36%] 2xl:top-36
      "
       src={Saly2} alt="saly2" />
      <img
        className="max-md:hidden z-20 transform absolute 
        md:left-[5%] md:w-[19%] md:top-[19%]
        lg:left-[12%] lg:w-[15%] lg:top-[18%]
        xl:left-[20%] xl:w-[11%] xl:top-[19%]
        2xl:left-[23%] 2xl:w-[10%] 2xl:top-[19%]
        "
        src={Maskgroup}
        alt="title"
      />
      <img
        className="max-md:hidden z-20 transform absolute 
        md:left-[8%] md:w-[19%] md:top-[51%]
        lg:left-[15%] lg:w-[15%] lg:top-[55%]
        xl:left-[22%] xl:w-[12%] xl:top-[56%]
        2xl:left-[26%] 2xl:w-[10%] 2xl:top-[58%]
        "
        src={Doodle42}
        alt="title"
      />
      {/* grettings */}
      <p className="flex-1 absolute text-4xl h-[10%] left-[17%] top-[35%] text-gray-700 
      md:left-[57%] md:text-2xl md:top-[35%]
      lg:left-[56%] lg:text-2xl lg:top-[35%]
      xl:left-[54%] xl:text-2xl xl:top-[35%]
      2xl:left-[55%] 2xl:text-2xl 2xl:top-[39%]
      ">Hi, </p>
      {/* container form */}
    <div className="z-10 inline-flex items-start justify-start w-[88%] h-[46%] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-[6%] top-48 
      md:left-[10%] md:h-[50%] md:w-[80%]
      lg:left-[15%] lg:h-[50%] lg:w-[70%]
      xl:left-[22%] xl:h-[50%] xl:w-[55%]
      2xl:left-[26%] 2xl:h-[50%] 2xl:w-[50%]
      ">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="z-30 absolute bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-10 border rounded-full border-gray-700 left-[12%] top-[50%] text-sm text-gray-700 
          md:top-[45%] md:left-[58%] md:h-[6%] md:w-[35%]
          xl:top-[45%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          2xl:top-[45%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]
          "
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"

          {...register("email", {required: "Required field"})}
          
          />
        <input
          className="z-30 bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-[12%] top-[65%] text-sm text-gray-700 
          md:top-[57%] md:left-[58%] md:h-[6%] md:w-[35%]
          2xl:top-[58%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]
          xl:top-[56%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          "
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          
          {...register("password", {
            required: "Required field",
          })}
          
          />
          {/* button sigIn */}
        <button className="z-30 absolute flex items-center justify-center flex-1 px-[20%] py-4 left-[12%] -bottom-[22%] w-[75%] h-[11%] bg-gray-700 rounded-full font-bold text-gray-100 
        md:left-[58%] md:h-[6%] md:w-[35%] md:bottom-[12%] md:px-5
        xl:left-[58%] xl:h-[9%] xl:w-[30%] xl:bottom-[13%] xl:px-5
        2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%] 2xl:bottom-[10%] 2xl:px-5
        " type="submit">Sign in
        </button>
        {/* button  forgot password*/}
        <button className="z-30 absolute px-50 py-0 left-[12%] h-[5%] bottom-[10%] text-gray-700
        md:left-[56%] md:h-0 md:w-[36%] md:bottom-[30%] md:text-sm 
        xl:bottom-[32%] xl:left-[54%] xl:h-0
        2xl:bottom-[30%] 2xl:left-[53%] 2xl:h-0
        " type="submit">
          Do you forgot your password?
        </button>
      </form>

        <p className="flex-1 absolute h-full text-3xl font-bold text-gray-700 
        md:left-[58%]
        lg:left-[58%]
        xl:left-[58%]
        2xl:left-[58%]
        ">
          Sign in
        </p>
        {/* horizontal line */}
        <div className="absolute w-[90%] border-t-0 border-dotted border-gray-600 border-2 top-20 right-4 
        md:w-[34%] md:left-[58%]
        xl:w-[30%] xl:left-[58%] xl:top-[21%]" />
         
          {/* vertical line */}
        <div className="max-md:hidden absolute border-t-0 border-b-0 border-r-0 border-solid border-gray-600 border-2 
        md:h-[85%] md:right-[50%] md:top-[7%]
        xl:h-[82%] xl:right-[50%] xl:top-[10%]" />
      </div>
      </>
  );
};

export default Login;
