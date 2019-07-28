import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles/Pagination.css'

const Pagination = ({ paginate, currentPage }) => {

    const forward = currentPage + 1;
    const back = currentPage - 1;

    return (
        <div className="nav-forward-back">
            <div onClick={() => paginate(back)} href="!#" className="page-link-back">
                <FaArrowLeft fontSize="30px" color="white"/>
            </div>
            <div onClick={() => paginate(forward)} href="!#" className="page-link-forward">
                <FaArrowRight fontSize="30px" color="white"/>
            </div>
        </div>
    )
}

export default Pagination;
