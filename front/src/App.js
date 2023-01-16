import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Stadistics from "./pages/Stadistics";
import Profile from "./pages/Profile";
import Result from "./pages/Result";
// import Myprogress from "./pages/Myprogress";
// import Mymentees from './pages/Mymentees'
import Matches from "./pages/Matches";
import ReportsResults from "./pages/ReportsResult"
import UsersDetails from "./pages/UsersDetails";
import ReportsDetail from "./pages/ReportsDetails";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/users" element={<Users />} />
          <Route path="/matches" element={<Matches />} />
          {/* <Route path="/myprogress" element={<Myprogress />} /> */}
          {/* <Route path="/mymentees" element={<Mymentees />} /> */}
          <Route path="/users/results" element={<Result />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/results" element={<ReportsResults />} />
          <Route path="/reports/:id" element={<ReportsDetail />} />
          <Route path="/users/:id" element={<UsersDetails />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isAllowed={!!user && user.user?.role === "admin"} />
          }
        >
          <Route path="/stadistics" element={<Stadistics />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
