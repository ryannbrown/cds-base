import React, { Component } from "react";
import { ReactDOM } from "react";
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = (props) =>  {
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


  return (
  <div>
    {props.children}
    <Pagination>{items}</Pagination>
    <br />
    </div>
);
  }
    export default PaginationComponent;

    // ReactDOM.render(
    //   <Pagination />,
    //   document.getElementById('app')
    // );