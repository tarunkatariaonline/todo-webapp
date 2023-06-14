import { Box, Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { TodoClearFunction } from '../Redux/Slice/TodoAddSlice'


const TodoContainer = () => {
  const todolist = useSelector((state)=>state.TodoAddReducer.todoList)
  localStorage.setItem("todo", JSON.stringify(todolist));

  const [showTodoStyle,setShowTodoStyle] = useState("all")
  const dispatch = useDispatch()
  console.log(todolist)
  return (
   <HStack w={"100%"} minH={"100vh"} justifyContent={"center"} bgColor={"#818da1"} alignItems={"center"} >
    <Box minW={["90%","500px"]}  borderColor={"red"} bgColor={"white"} borderRadius={"10px"} >
     <TodoAdd/>
     <HStack w={"100%"} justifyContent={"center"}>
     <HStack justifyContent={"space-around"} my={"20px"} w={"95%"}>
     <HStack > <Button size={"sm"} mx={"5px"} onClick={()=>{
      setShowTodoStyle("all")
     }} >All</Button> <Button size={"sm"} onClick={()=>{
       setShowTodoStyle("pending")
     }} mx={"5px"}>Pending</Button> <Button size={"sm"} mx={"5px"} onClick={()=>{
      setShowTodoStyle("completed")
       
     }}>Completed</Button> </HStack> <Button bgColor={"#525966"} color={"white"} size={"sm"} onClick={()=>{
      dispatch(TodoClearFunction())
     }}>Clear All</Button>
      </HStack>
      </HStack>
      {todolist.map((item)=>{
        return  (showTodoStyle==="all")? <TodoList key={item.id} todo={item.todo} status={item.status} id={item.id}  /> :(showTodoStyle===item.status)?<TodoList key={item.id} todo={item.todo} status={item.status} id={item.id}  />:""
      })}
      
    </Box>

    

   </HStack>
  )
}

export default TodoContainer