import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from './userDataSlice'

export default configureStore({
  reducer: {
    user: userDataSlice
  }
})