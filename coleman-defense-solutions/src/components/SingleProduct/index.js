import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, CardGroup} from 'react-bootstrap';
import App from '../../App'
import './style.css'
import ProductInformation from "../../components/ProductInformation";

const SingleProduct = (props) => {

    return (
    <Card>
      <Card.Img variant="top" height="auto" src={`https://media.server.theshootingwarehouse.com/small/${props.itemno}.jpg`} />
      <Card.Body className="title-text">
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroupItem>{props.attr1}</ListGroupItem> */}
         {/* <ListGroupItem>{props.attr2}</ListGroupItem>
        <ListGroupItem>{props.attr3}</ListGroupItem>
        <ListGroupItem>Item Num {props.itemNum}</ListGroupItem>
        <ListGroupItem>Cat Description: {props.catdes}</ListGroupItem>
      </ListGroup> */} 
      {/* <div className="button-box"> */}
        <Card.Link href="#"><Button
        //  variant="outline-success" className="button-box" 
         size="lg" block>
         <ProductInformation
         name={props.name}
         attr0={props.attr0}
         attr1={props.attr1}
         attr2={props.attr2}
         attr3={props.attr3}
         attr4={props.attr4}
         attr5={props.attr5}
         attr6={props.attr6}
         attr7={props.attr7}
         attr8={props.attr8}
         attr9={props.attr9}
         attr11={props.attr11}
         attr12={props.attr12}
         attr13={props.attr13}
         attr14={props.attr14}
         attr15={props.attr15}
         attr16={props.attr16}
         attr17={props.attr17}
         attr18={props.attr18}
         attr19={props.attr19}
         attr20={props.attr20}
        itemno= {props.itemno}



         catData={props.catData}
         gunData={props.gunData}
         /></Button></Card.Link>
        {/* <Card.Link href="#">Add to Cart</Card.Link> */}
      {/* </div> */}
    </Card>
    )
}

export default SingleProduct


