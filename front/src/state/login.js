// import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const sendMe = createAsyncThunk('ME', async () => {
//     const auth = await axios.get('http://localhost:3001/api/auth/me')
//     const res = await axios.get(`http://localhost:3001/api/user/${auth.data._id}`)
//     return res.data
// })

// export const signUpRequest = createAsyncThunk('SIGNUP', async (info) => {
//     const res = await axios.post('http://localhost:3001/api/auth/signup', info)   
//     return res.data
// })

// export const sendLoginRequest = createAsyncThunk('LOGIN', async (info) => {
//     const login = await axios.post('http://localhost:3001/api/auth/login', info)
//     console.log("LOGIN",login)
//     const res = await axios.get(`http://localhost:3001/api/user/${login.data._id}`)
//     return res.data
// })

// export const sendLogOutRequest = createAsyncThunk('LOGOUT', async () => {
//     const res = await axios.post('http://localhost:3001/api/auth/logout')
//     return res.data
// })

// export const updateUser = createAsyncThunk('UPDATE_USER', async (data) => {
//     const { id } = data
//     const res = await axios.put(`http://localhost:3001/api/user/${id}`, data)
//     return res.data
// })

// const loginReducer = createReducer([], {
//     [sendMe.fulfilled]: (state, action) => action.payload,
//     [signUpRequest.fulfilled]: (state, action) => action.payload,
//     [sendLoginRequest.fulfilled]: (state, action) => action.payload,
//     [sendLogOutRequest.fulfilled]: (state, action) => action.payload,
//     [updateUser.fulfilled]: (state, action) => action.payload
// })

// export default loginReducer
