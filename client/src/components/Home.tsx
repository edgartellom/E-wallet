import React, { useEffect, useState, useCallback } from 'react'
// import { useAppDispatch, useAppSelector } from '../../redux/store'
// import { ordered, restocked } from '../../redux/actions/ProductReducer'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { getTodos } from '../redux/todoSlice/todoSlice' 

function Home() {

  const listTodo = useAppSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  console.log(listTodo)

    useEffect(() => {
      dispatch(getTodos())
      
    },[])

  return (
    <div>
      
      
    </div>

  )
}

export default Home