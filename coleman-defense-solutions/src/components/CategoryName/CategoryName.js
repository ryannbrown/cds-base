import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import App from '../../App'
import SingleProduct from '../SingleProduct'
import ProductList from '../ProductList'


const CategoryName = (props) => {

    return ( 
  <h1 className="text-center mt-5"> {props.category}</h1>
    )
}

export default CategoryName