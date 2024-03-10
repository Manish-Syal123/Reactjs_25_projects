import React, { useState } from "react";
import Pagination from "./Pagination";
import "./pagingstyles.css";
const PaginationTest = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currPage_ListOfItems = dummyData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (getCurrPage) => {
    setCurrentPage(getCurrPage);
  };
  return (
    <div>
      <h1>Pagination</h1>
      <ul className="list-items">
        {currPage_ListOfItems.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationTest;
