import React from "react";
import Doodle1 from "../assets/home/doodle1.png";
import Doodle2 from "../assets/home/doodle2.png";
import Vector from "../assets/home/Vector.png";
import Saly2 from "../assets/loginsignup/Saly2.png"
import Maskgroup from '../assets/loginsignup/Maskgroup.png'
import Doodle42 from '../assets/loginsignup/doodle42.png'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from 'axios'



const Login = () => {

  const {id} = useParams()
  // console.log('ESTO ES ID --->', id)
  const navigate = useNavigate()
  const [values, setValues] = React.useState({
      email: "",
      password: "",
    });

    const generateError = (err) => {}
    // toast.error(err, {
    //   position: "top-center",}      );


    const handleOnChange = (e) => {
      // console.log("ES ESTO target--->", e.target.name);
      setValues({ ...values, [e.target.name]: e.target.value });
      
      // console.log("ES ESTO valores --->", e.target.name);
    };

  const handleSubmit = async (e) => {
    e.preventDefault()    
    
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/login",
        { ...values },
        { withCredentials: true },
        
      );
      const res = await axios.get(`http://localhost:3001/api/profile/${id}`)

      // console.log('ESTO ES DATA --->', data)
      // console.log('ESTO ES RES --->', res)

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
           if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          
          navigate(`/profile/${data.id._id}`);
        } 
      } 
      
      return res
    } catch (error) {
      console.log(error);
    }
  };

  



  return (
    <>
    <div className="absolute bg-[#bfd732] w-full h-full"/>
      <img className="max-xl:hidden xl:absolute left-[25%] h-[59%] w-[28%] top-36" src={Saly2} alt="saly2" />
      <img
        className="transform absolute -rotate-90 w-[44%] h-[27%] right-[6%] top-[1%]  xl:top-[35%] xl:rotate-180 xl:h-[18%] xl:w-[10%] xl:left-[41%]"
        src={Doodle1}
        alt="doodle1"
      />
      <img
        className="z-20 transform absolute rotate-180 w-[25%] h-[20%] left-[31%] -top-9 xl:-rotate-45 xl:w-[13%] xl:h-[25%] xl:top-[12%] xl:left-[39%]"
        src={Doodle2}
        alt="doodle2"
      />
      <img
        className="transform absolute top-16 left-7 w-52 xl:left-[52%] xl:w-[10%] xl:top-[12%]"
        src={Vector}
        alt="title"
      />
      <img
        className="max-xl:hidden z-20 transform absolute left-[24%] w-[11%] top-[19%]"
        src={Maskgroup}
        alt="title"
      />
      <img
        className="max-xl:hidden z-20 transform absolute left-[27%] w-[10%] top-[55%]"
        src={Doodle42}
        alt="title"
      />
      <div className="relative inline-flex items-start top-1"/>
      
      <p className="flex-1 absolute text-4xl h-[10%] left-[17%] top-[37%] text-gray-700 xl:left-[52%] xl:text-2xl xl:top-[38%]">Hi, </p>

      <form onSubmit={handleSubmit}>
        <input
        onChange={handleOnChange}
          className="z-30 bg-[#bfd732] w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 top-[45%] text-sm text-gray-700 xl:top-[45%] xl:left-[52%] xl:h-[6%]"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
        onChange={handleOnChange}
          className="z-30 bg-[#bfd732] w-64 h-14 py-4 pl-14 pr-16 absolute border rounded-full border-gray-700 left-16 top-[53%] text-sm text-gray-700 xl:top-[52%] xl:left-[52%] xl:h-[6%]"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button className="z-30 absolute flex items-center justify-center flex-1 px-32 py-4 left-10 bottom-[18%] bg-gray-700 rounded-full font-bold text-gray-100 xl:left-[52%] xl:h-[6%] xl:w-[16%] xl:bottom-[30%] xl:px-5" type="submit">Sign in
        </button>
        <button className="z-30 absolute px-50 py-0 left-[18%] h-[5%] bottom-[34%] text-gray-700 xl:bottom-[41%] xl:left-[52%] xl:h-0" type="submit">
          Do you forgot your password?
        </button>
      </form>
      <div className="z-10 inline-flex items-start justify-start w-[88%] h-[46%] pl-6 pr-48 pt-7 pb-72 absolute border-2 rounded-3xl border-gray-700 left-6 top-48 xl:left-[28%] xl:h-[50%] xl:w-[44%]">
        <p className="flex-1 absolute h-full text-3xl font-bold text-gray-700 xl:left-[55%]">
          Sign in
        </p>
        <div className="absolute w-[90%] border-t-0 border-dotted border-gray-600 border-2 top-20 right-4 xl:w-[37%] xl:left-[55%] xl:top-[21%]" />
        <div className="max-xl:hidden absolute h-[85%] border-t-0 border-b-0 border-r-0 border-solid border-gray-600 border-2 right-[50%] top-[7%]" />
      </div>
      </>
  );
};

export default Login;
