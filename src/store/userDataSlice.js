import { createSlice } from '@reduxjs/toolkit'

export const UserData = createSlice({
  name: 'user',
  initialState: {
    data: [],
    shouldShowUserForm:false,
    editUserData:{},
    userClickedOnEditIcon:false
  },
  reducers: {
    setUserDetails: (state, action) => {
        const Id = state.data?.length + 1
        const data = {...action.payload ,id:Id}
      state.data.push(data)
    },
    setShouldSHowUserForm:(state,action)=>{
        state.shouldShowUserForm = action.payload
    },
    setEditUserData :(state,action)=>{
        state.editUserData = action.payload
    },
    deleteUserDetails:(state,action)=>{
        state.data = state.data.filter((eachItem)=>eachItem?.id !== action.payload)
    },
    updateUserData:(state,action)=>{
        const existing = state.data.findIndex((item)=>item.id === action.payload.id)
        if(existing !== -1){
            state.data[existing] = {...state.data[existing],...action.payload}
        }else{
            state.data.push({...action.payload})
        }
    },
    setuserClickedOnEditIcon:(state,action)=>{
        state.userClickedOnEditIcon = action.payload
    }
   
  }
})

export const { setUserDetails,setShouldSHowUserForm,setEditUserData,deleteUserDetails,updateUserData,setuserClickedOnEditIcon} = UserData.actions

export default UserData.reducer