import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Slice/todoSlice'

export const store = configureStore({
  reducer: {
    todo : todoReducer
  },
})