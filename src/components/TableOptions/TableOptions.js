import React from "react";
import "./TableOptionsStyles.css";

const TableOptions = ({ event, optionSelected, resetPage }) => {
  console.log(optionSelected);
  return (
    <section className="optionsContainer">
      <p>Users per page</p>
      <ul className="options">
        <li
          className={optionSelected === "1" ? "active" : "option"}
          onClick={() => [event("1"), resetPage("1")]}
        >
          <span>1</span>
        </li>
        <li
          className={optionSelected === "2" ? "active" : "option"}
          onClick={() => [event("2"), resetPage("1")]}
        >
          <span>2</span>
        </li>
        <li
          className={optionSelected === "5" ? "active" : "option"}
          onClick={() => [event("5"), resetPage("1")]}
        >
          <span>5</span>
        </li>
        <li
          className={optionSelected === "10" ? "active" : "option"}
          onClick={() => [event("10"), resetPage("1")]}
        >
          <span>10</span>
        </li>
      </ul>
    </section>
  );
};

export default TableOptions;
