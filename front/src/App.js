import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Skills from "./pages/Skills";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Stadistics from "./pages/Stadistics";
import Profile from "./pages/Profile";
import Result from "./pages/Result";
import { useSelector } from "react-redux";
import UsersDetails from "./pages/UsersDetails";

function App() {
  


  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDetails />} />
          <Route path="/result/:result" element={<Result />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/stadistics" element={<Stadistics />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </>
  );
}

export default App;
