import { Checkbox, HStack,Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { TodoRemoveFunction, TodoUpdateFunction } from '../Redux/Slice/TodoAddSlice'

const TodoList = (props) => {
    const dispatch = useDispatch()
    const todo = props.todo
    const id = props.id
    const status = props.status
  return (
    <HStack w="100%" justifyContent={"center"} my={"10px"}>
        <HStack w={"85%"} h={"40px"} borderTop={"1px solid #525966"}  >
         
         <HStack justifyContent={"space-between"} w={"full"}>
            <HStack>
        {status==="pending"?<Checkbox colorScheme={"red"}  onChange={()=>{
       
              dispatch(TodoUpdateFunction(id))
         
          
          }} ></Checkbox> :<Checkbox  defaultChecked colorScheme={"red"} onChange={()=>{
            setTimeout(()=>{
              dispatch(TodoUpdateFunction(id))
            },200)
            
          }} ></Checkbox> }  
          <Text  textDecor={(status==="completed")?"line-through":""}>{todo}</Text>
          </HStack>
          </HStack>
          <Button colorScheme="red" size={"sm"} p={"0px"}><AiOutlineDelete onClick={()=>{
            dispatch(TodoRemoveFunction(id))
          }} fontSize={"24px"}/></Button>
          
        </HStack>
    </HStack>
  )
}

export default TodoList