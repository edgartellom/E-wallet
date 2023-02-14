import React, { useState, createContext, useEffect } from 'react'
import { getProductList } from '../../redux/slices/productListSlice'
import { useDispatch, useSelector } from 'react-redux'

const dispatch = useDispatch()
const list = useSelector(state => state.products.list)


export const ShopContext = createContext(null)

useEffect(() => {
    dispatch(getProductList())
})

console.log(list)



const getCart = () => {
    let cart = {}
    for(let i =1; i<list.length+1;i++){
        cart[i] = 0
    }

    return cart
}



export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getCart())

    const addtoCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    constValue = {cartItems, addtoCart, removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


export default ShopContext