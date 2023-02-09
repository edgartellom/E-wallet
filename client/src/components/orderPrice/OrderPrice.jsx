import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderPrice } from '../../redux/Slices/productList.slice';

const OrderPrice = () => {

    const dispatch = useDispatch();
    const list = useSelector((store) => store.list);

    

    const handlePriceOrder = e => {
        //e.preventDefault()
        dispatch(orderPrice())
        //dispatch(changeCurrentPage(1));
    }

    return (
        <div>
            <button onClick={() => handlePriceOrder('asc')}>Sort by price (lowest first)</button>
            <button onClick={() => handlePriceOrder('desc')}>Sort by price (highest first)</button>
        </div>
    );
};

export default OrderPrice;