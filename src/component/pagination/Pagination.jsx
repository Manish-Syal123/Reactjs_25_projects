import React from "react";

const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      {pages.map((pageNo) => (
        <button
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
          className={`pagination-btn ${currentPage === pageNo ? "active" : ""}`}
        >
          {pageNo}
        </button>
      ))}
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
