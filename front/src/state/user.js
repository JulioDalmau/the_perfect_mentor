import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendMe = createAsyncThunk('ME', async () => {
  const auth = await axios.get('http://localhost:3001/api/auth/me')
  console.log(auth)
  const res = await axios.get(`http://localhost:3001/api/user/${auth.data._id}`)
  return res.data
})

export const sendLoginRequest = createAsyncThunk("LOGIN", (data) => {
  return axios.post("http://localhost:3001/api/auth/login", data, { withCredentials: true })
    .then((res) => res.data);
});

export const sendSignUpRequest = createAsyncThunk("SIGNUP", (data) => {
  return axios.post("http://localhost:3001/api/auth/signup", data, {withCredentials: true})
  .then((res) =>  res.data)
})

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("http://localhost:3001/api/auth/logout")
    .then((err) => { console.log(err)})
    .catch((err) => console.log("Something happened", err));
});

export const updateUser = createAsyncThunk('UPDATE_USER', async (data) => {
  const { id } = data
  const res = await axios.put(`http://localhost:3001/api/profile/${id}`, data)
  return res.data
})

const userReducer = createReducer([], {
  [sendMe.fulfilled]: (state, action) => action.payload,
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => (state = {}),
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [updateUser.fulfilled]: (state, action) => action.payload
});

export default userReducer;
