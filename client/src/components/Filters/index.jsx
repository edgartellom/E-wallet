import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { orderByName } from ""


export default function Filter(setCurrentPage, setOrder) {

    function handleOrderByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`)
    };

    return (
        <select onChange={e => handleOrderByName(e)}>
            <option value='x'>Order by name</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
        </select>
    )
}