import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import App from '../../App'
import SingleProduct from '../SingleProduct'
import CategoryName from '../CategoryName/CategoryName'
import './style.css'
import '../../pages/inventory/Shotguns'

const ProductList = ({ guns, catData }) => {
console.log("cat", catData);
console.log( "HALP!", JSON.stringify(guns[0].ITATR8))
    return (

<div className="deck-wrapper">
      
    <CardDeck>
            {
                guns.map(item => (
              <SingleProduct
              key={item.ITEMNO}
              desc={item.IDESC}
              name={item.SHDESC}
              catData={catData}
              attr0={JSON.stringify(item.ITATR0)}
              attr1={JSON.stringify(item.ITATR1)}
              attr2={JSON.stringify(item.ITATR2)}
              attr3={JSON.stringify(item.ITATR3)}
              attr4={JSON.stringify(item.ITATR4)}
              attr5={JSON.stringify(item.ITATR5)}
              attr6={JSON.stringify(item.ITATR6)}
              attr7={JSON.stringify(item.ITATR7)}
              attr8={JSON.stringify(item.ITATR8)}
              attr9={JSON.stringify(item.ITATR9)}
              attr11={JSON.stringify(item.ITATR11)}
              attr12={JSON.stringify(item.ITATR12)}
              attr13={JSON.stringify(item.ITATR13)}
              attr14={JSON.stringify(item.ITATR14)}
              attr15={JSON.stringify(item.ITATR15)}
              attr16={JSON.stringify(item.ITATR16)}
              attr17={JSON.stringify(item.ITATR17)}
              attr18={JSON.stringify(item.ITATR18)}
              attr19={JSON.stringify(item.ITATR19)}
              attr20={JSON.stringify(item.ITATR20)}
              itemno={item.ITEMNO}
              />
            ))}
      </CardDeck>
</div>
    )
}

export default ProductList


