import React from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate}) => {
    
    const pageNumbers = [];

    // populates the array with the number of pages needed to contain all cards
    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
