import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../redux/Slices/paginationSlice";
import "./paginated.css";

export const Paginated = ({ phones, phonesPerPage }) => {
    
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(phones / phonesPerPage); i++) { 
        pageNumber.push(i)
    }

    const handlePage = num => {
        if (currentPage !== num) dispatch(changeCurrentPage(num))
    }

    const handlePreviousPage = () => {
        if(currentPage > 1) {
            dispatch(changeCurrentPage(currentPage - 1))
        }
    }

    const handleNextPage = () => {
        if(currentPage < pageNumber.length) {
            dispatch(changeCurrentPage(currentPage + 1))
        }
    }

    return (
        <div className={"container-pagination-"} >
        <nav className={"nav-container-" }>
        
            <ul className={"pagination-"}>
            <li className={"page-iten-"} onClick={handlePreviousPage}>◄</li>
                {
                pageNumber?.map(num => 
                    <li className={"page-iten-"(currentPage === num  ? '-active' : '')} key={num} onClick={() =>handlePage(num)}>
                        <span>{num}</span>
                    </li>
                )}
                <li className={"page-iten-"} onClick={handleNextPage}>►</li>
            </ul>
            
        </nav>
        </div>
    );
};
