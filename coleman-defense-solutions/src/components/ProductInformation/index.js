import React, { useState, useEffect } from "react";
import $ from "jquery";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  CardGroup
} from "react-bootstrap";
import App from "../../App";
import './style.css'
import Modal from "react-bootstrap/Modal";
import xml2js from "xml2js";
import axios from "axios";

const ProductInformation = props => {
  let cat = props.catData;
//   var itemnoString = JSON.stringify(props.itemno);
//   var itemno = itemnoString.replace(/['"]+/g, '');
  let itemno = props.itemno;
  // console.log("itemno", itemno)
  
//   var itemno = parseInt(itemnoString);
  // let gun = props.gunData;
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const infoEdits = () =>
console.log("modal is shown")
// $(".list-group-item:contains(preserve)")
//   $(".list-group-item").remove();
$(".list-group-item").text(function () {
  return $(this).text().replace('[{"placeholder":{"xml:space":"preserve"}}]', " NA")
  ; 
});
$(".list-group-item").text(function () {
  return $(this).text().replace('["', " "); 
  });
  $(".list-group-item").text(function () {
    return $(this).text().replace('"]', " "); 
    });
;

  const [itemImage, setItemImage] = useState({});


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal size="lg" show={show} scrollable={true} onHide={handleClose} onEntered={ function(){ infoEdits() }} onExit={ function(){ console.log( "Modal is closed" ) }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>{props.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={`https://media.server.theshootingwarehouse.com/large/${itemno}.jpg`} alt="..." class="img-thumbnail"></img>
            <div className="text-center"><i className="far fa-arrow-alt-circle-down more-inf"></i> Specifications</div>
          <ListGroup className="text-center" variant="flush">
            <ListGroup.Item>
              {cat.ATTR0}: {props.attr0}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR1}: {props.attr1}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR2}: {props.attr2}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR3}: {props.attr3}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR4}: {props.attr4}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR5}: {props.attr5}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR6}:{props.attr6}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR7}:{props.attr7}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR8}:{props.attr8}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR9}:{props.attr9}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR11}:{props.attr11}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR12}:{props.attr12}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR13}:{props.attr13}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR14}:{props.attr14}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR15}:{props.attr15}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR16}:{props.attr16}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR17}:{props.attr17}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR18}:{props.attr18}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR19}:{props.attr19}
            </ListGroup.Item>
            <ListGroup.Item>
              {cat.ATTR20}:{props.attr20}
            </ListGroup.Item>
            <ListGroup.Item>Item No:{props.itemno}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductInformation;
