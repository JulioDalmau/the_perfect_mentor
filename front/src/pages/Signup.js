import React from "react";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import Vector from "../assets/home/Vector.png";
import Saly2 from "../assets/loginsignup/Saly2.png"
import Maskgroup from '../assets/loginsignup/Maskgroup.png'
import Doodle42 from '../assets/loginsignup/doodle42.png'
import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { sendSignUpRequest } from "../state/user";
import { useDispatch, useSelector } from "react-redux";



const Signup = () => {

  
  
  // const user = useSelector((state) => state.user);
  // const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm();
  
  
  // const generateError = (err) => {};

  const handleOnChange = (e) => {
    // console.log("ES ESTO values --->", values);
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log("ES ESTO --->", values);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     /* version anterior */
  //     // const { data } = await axios.post(
  //     //   "http://localhost:3001/api/auth/signup",
  //     //   { ...values },
  //     //   { withCredentials: true }
  //     // );

  //     const data = await signUp(values.username, values.email, values.password)

  //     if (data) {
  //       if (data.errors) {
  //         const { username, email, password } = data.errors;
  //         if (username) generateError(username);
  //         else if (email) generateError(email);
  //         else if (password) generateError(password);
  //       } else {
          
  //         navigate(`/profile/${data._id}`);
  //       } 
  //     } 

      
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = (data) => {
    console.log("ESTO DATA ANTES DEL DISPATCH", data)
    dispatch(sendSignUpRequest(data))
    // console.log("ESTO DATA DESPUES DEL DISPATCH", data)
    .then(({ payload }) => {
      console.log("esto payload", payload)
      if (payload) {
        // console.log("esto data dentro de payload", data)
        // console.log("esto payload y user", payload.user)
          localStorage.setItem("user", JSON.stringify(payload));
          navigate(`/profile/${payload._id}`)
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
      <img 
        className="max-md:hidden absolute 
        md:left-[7%] md:h-[53%] md:w-[50%] md:top-[18%]
        lg:left-[11%] lg:h-[53%] lg:w-[45%] lg:top-[19%]
        xl:left-[18%] xl:h-[59%] xl:w-[36%] xl:top-36
        2xl:left-[21%] 2xl:h-[59%] 2xl:w-[36%] 2xl:top-36
        " src={Saly2} alt="saly2" />
      <img
        className="max-md:hidden z-20 transform absolute 
        md:left-[5%] md:w-[19%] md:top-[19%]
        lg:left-[12%] lg:w-[15%] lg:top-[18%]
        xl:left-[20%] xl:w-[11%] xl:top-[19%]
        2xl:left-[23%] 2xl:w-[10%] 2xl:top-[19%]"
        src={Maskgroup}
        alt="title"
      />
      <img
        className="max-md:hidden z-20 transform absolute 
        md:left-[8%] md:w-[19%] md:top-[51%]
        lg:left-[15%] lg:w-[15%] lg:top-[55%]
        xl:left-[22%] xl:w-[12%] xl:top-[56%]
        2xl:left-[26%] 2xl:w-[10%] 2xl:top-[58%]"
        src={Doodle42}
        alt="title"
      />
      {/* container form */}
      <div className="z-10 inline-flex items-start justify-start w-[88%] h-[46%] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-[6%] top-48 
      md:left-[10%] md:h-[50%] md:w-[80%]
      lg:left-[15%] lg:h-[50%] lg:w-[70%]
      xl:left-[22%] xl:h-[50%] xl:w-[55%]
      2xl:left-[26%] 2xl:h-[50%] 2xl:w-[50%]
      ">
      
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <input
          className="z-30 absolute bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-16 border rounded-full border-gray-700 left-[12%] top-[33%] text-sm text-gray-700 
          md:top-[30%] md:left-[58%] md:h-[6%] md:w-[35%]
          xl:top-[29%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          2xl:top-[27%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"

          {...register("username", {
            required: "Required field",
          })}
        />
        <input
          className="z-30 absolute bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-10 border rounded-full border-gray-700 left-[12%] top-[48%] text-sm text-gray-700 
          md:top-[42%] md:left-[58%] md:h-[6%] md:w-[35%]
          xl:top-[41%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          2xl:top-[40%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"

          {...register("email", {
            required: "Required field",
          })}
        />
        <input
          className="z-30 absolute bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-16 border rounded-full border-gray-700 left-[12%] top-[63%] text-sm text-gray-700 
          md:top-[53%] md:left-[58%] md:h-[6%] md:w-[35%]
          xl:top-[53%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          2xl:top-[53%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]"
          type="text"
          name="role"
          placeholder="Role"
          autoComplete="role"

          {...register("role", {
            required: "Required field",
          })}
        />
        <input
          className="z-30 absolute bg-[#bfd732] w-[75%] h-[11%] py-4 pl-14 pr-16 border rounded-full border-gray-700 left-[12%] top-[77%] text-sm text-gray-700 
          md:top-[65%] md:left-[58%] md:h-[6%] md:w-[35%]
          xl:top-[65%] xl:left-[58%] xl:h-[9%] xl:w-[30%]
          2xl:top-[66%] 2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%]"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"

          {...register("password", {
            required: "Required field",
          })}
        />
        <button className="z-30 absolute flex items-center justify-center flex-1 px-[20%] py-4 left-[12%] -bottom-[22%] w-[75%] h-[11%] bg-gray-700 rounded-full font-bold text-gray-100 
        md:left-[58%] md:h-[6%] md:w-[35%] md:bottom-[12%] md:px-5
        xl:left-[58%] xl:h-[9%] xl:w-[30%] xl:bottom-[13%] xl:px-5
        2xl:left-[58%] 2xl:h-[10%] 2xl:w-[30%] 2xl:bottom-[9%] 2xl:px-5
        " type="submit">Sign up
        </button>
        
      </form>
      
        <p className="flex-1 absolute h-full text-3xl font-bold text-gray-700 
        md:left-[58%]
        lg:left-[58%]
        xl:left-[58%]
        2xl:left-[58%]">
          Sign up
        </p>
        <div className="absolute w-[90%] border-t-0 border-dotted border-gray-600 border-2 top-20 right-4 
        md:w-[34%] md:left-[58%]
        xl:w-[30%] xl:left-[58%] xl:top-[21%]" />
        <div className="max-md:hidden absolute border-t-0 border-b-0 border-r-0 border-solid border-gray-600 border-2 
        md:h-[85%] md:right-[50%] md:top-[7%]
        xl:h-[82%] xl:right-[50%] xl:top-[10%]" />
      </div>
    </>
    
  );
};

export default Signup;

