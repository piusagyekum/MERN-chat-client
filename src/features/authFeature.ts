import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: false,
  username: "",
  image: "",
}

const authFeature = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true
    //   state.username = action.payload
    },
    logoutUser: (state) => {
      state.isLoggedIn = false
    },
  },
})

export default authFeature.reducer
export const {logoutUser,loginUser} = authFeature.actions
