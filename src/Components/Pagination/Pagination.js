



import React from 'react'
import './Pagination.css';

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: pages }).map((_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? 'active' : ''}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};


export default Pagination