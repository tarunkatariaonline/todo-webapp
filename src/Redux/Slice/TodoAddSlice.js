import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: (JSON.parse(localStorage.getItem("todo")))?JSON.parse(localStorage.getItem("todo")):[],
}

export const TodoAddSlice = createSlice({
  name: 'TodoAdd',
  initialState,
  reducers: {
    TodoAddFunction: (state,action) => {
      state.todoList.unshift(action.payload)
    },
    TodoUpdateFunction:(state,action)=>{
        console.log(action.payload)
        let todoItem = state.todoList.find((item)=>item.id===action.payload)
         
        if(todoItem.status==="pending"){
          todoItem.status="completed"
        }else{
          todoItem.status="pending"
        }
       
        

    },
    TodoRemoveFunction: (state,action) => {
      state.todoList = state.todoList.filter((item)=>item.id!==action.payload)
    },
      
    TodoClearFunction :(state)=>{
    state.todoList= []
    }


  
   
    
  },
})

// Action creators are generated for each case reducer function
export const { TodoAddFunction,TodoUpdateFunction,TodoRemoveFunction,TodoClearFunction} = TodoAddSlice.actions

export default TodoAddSlice.reducer