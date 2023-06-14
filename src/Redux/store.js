import { configureStore } from '@reduxjs/toolkit'
import TodoAddReducer from './Slice/TodoAddSlice'
export const store = configureStore({
  reducer: {
  TodoAddReducer
  },
})