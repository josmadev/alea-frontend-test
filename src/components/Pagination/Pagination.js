import React, { useState, useEffect } from "react";
import "./PaginationStyles.css";

const Pagination = ({ totalPages, event }) => {
  const [page, setPage] = useState([...Array(totalPages).keys()]);

  useEffect(() => {
    setPage([...Array(totalPages).keys()]);
  }, [totalPages]);

  return (
    <div className="paginationContainer">
      <ul className="pages">
        {page.map(item => (
          <li className="page" key={item} onClick={() => event(item + 1)}>
            {item + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
