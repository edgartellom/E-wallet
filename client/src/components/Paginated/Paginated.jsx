import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../redux/Slices/paginationSlice";
import "./paginated.css";
import styled from 'styled-components';

const StyledBoton = styled.button`
margin: 3px;
cursor: pointer;
border-radius: 6px;
display: inline;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    height:40px;
    width: 35px;
    transition-duration: 01s;
    border: 2px solid rgb(15, 15, 15);
    background-color: rgb(194, 194, 194);
    box-shadow: -3px -2px 6px rgba(0, 0, 0, 0.555), 3px 2px 4px rgb(255, 255, 255);
&.current {
    background-color:  #a8b454;
  }
`

export const Paginated = ({ phones, phonesPerPage }) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.paginated.currentPage)

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(phones / phonesPerPage); i++) {
        pageNumber.push(i)
    }

    const handlePage = num => {
        if (currentPage !== num) dispatch(changeCurrentPage(num))
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(changeCurrentPage(currentPage - 1))
        }
    }

    const handleNextPage = () => {
        if (currentPage < pageNumber.length) {
            dispatch(changeCurrentPage(currentPage + 1))
        }
    }

    return (
        <div className={"container-pagination-"} >
            <nav className={"nav-container-"}>

                <ul className={"pagination-"}>
                    <button className={"page-iten-"} onClick={handlePreviousPage}>◄</button>
                    {
                        pageNumber?.map(num =>
                            <StyledBoton className={(currentPage === num ? 'num current' : 'num')} key={num} onClick={() => handlePage(num)}>
                                <span>{num}</span>
                            </StyledBoton>
                        )}
                    <button className={"page-iten-"} onClick={handleNextPage}>►</button>
                </ul>

            </nav>
        </div>
    );
};
