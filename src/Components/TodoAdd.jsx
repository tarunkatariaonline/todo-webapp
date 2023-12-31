import { HStack, Input,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useToast } from '@chakra-ui/react'

import { TodoAddFunction } from '../Redux/Slice/TodoAddSlice'

const TodoAdd = () => {

  const toast =useToast()
    const [item,setItem] = useState("")
    const dispatch = useDispatch()

  return (
    <form onSubmit={(e)=>{
            e.preventDefault();

            if(item){
            console.log("from submitted")
           
   
            dispatch(TodoAddFunction({
                todo:item,
                status:"pending",
                id:nanoid(8)
                
                

            }))

            setItem("")

          }else{
            toast({
              title: 'Error',
              description: "Please Enter Todo Task.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
    }}>
    <HStack w={"100%"} justifyContent={"center"} mt={"20px"} >
 <HStack w={"80%"} border={"2px solid #525966"} h={"35px"} shadow={"md"} borderRadius={"5px"}>
 <Text ml={"10px"}> <AiOutlineMenu fontSize={"25px"} color='#525966'/> </Text> <Input h={"32px"} value={item} onChange={(e)=>{
    setItem(e.target.value)
 }} ml={"10px"} variant={"unstyled"}/> 
 </HStack>
 </HStack>
 </form>
  )
}

export default TodoAdd