import React, { useState, useEffect } from "react";
import { fetchData } from "../../helpers/fecthData";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import TableOptions from "../../components/TableOptions/TableOptions";
import Pagination from "../../components/Pagination/Pagination";

import "./UsersStyles.css";

const Users = () => {
  const [usersPerPage, setUsersPerPage] = useState("5");
  const [page, setPage] = useState("1");
  const [userData, setUserData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `${process.env.REACT_APP_API_URL}/users?per_page=${usersPerPage}&page=${page}`,
        "GET"
      );

      const data = await response;
      setUserData(data.data);
      setTotalPages(data.total_pages);
    })();
  }, [page, usersPerPage]);

  const selectUsersPerPage = value => {
    setUsersPerPage(value);
  };

  const selectPage = value => {
    setPage(value);
  };

  return (
    <div className="content">
      <Navbar />
      <section className="usersContiner">
        <h1>Users</h1>
        <section className="userTableContainer">
          <TableOptions
            event={selectUsersPerPage}
            optionSelected={usersPerPage}
            resetPage={selectPage}
          />
          {userData ? <Table userData={userData} /> : <span>SPINER HERE</span>}
          {totalPages ? (
            <Pagination
              totalPages={totalPages}
              pageSelected={page}
              event={selectPage}
            />
          ) : (
            <span>SPINER HERE</span>
          )}
        </section>
      </section>
    </div>
  );
};

export default Users;
