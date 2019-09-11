import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const BackButtonDetailView = ({paginate}) => {
    return (
        <div>
            <div onClick={() => paginate(-1)} href="!#" className="page-link-back">
                <FaArrowLeft fontSize="30px" color="white"/>
            </div>
        </div>
    )
}

export default BackButtonDetailView
