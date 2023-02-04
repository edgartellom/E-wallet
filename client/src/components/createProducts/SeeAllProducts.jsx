import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, getTodos } from '../../redux/slice'
function SeeAllProducts() {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.counter.counter)
    const idle = useSelector(state => state.counter.status)

    const adder = useSelector(state => state.counter.adder)
    console.log(idle)

    useEffect(() => {
      if(idle === 'idle'){
        dispatch(getTodos())
      }
        
        dispatch(add())
        
    }, [])

    console.log(selector)
    console.log(selector[0])
    console.log(adder)
  return (
    <div>
        Counter</div>
  )
}

export default SeeAllProducts