import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import App from '../../App'

const SingleProduct = (props) => {

    return (

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    {props.itemDesc}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Caliber</ListGroupItem>
    <ListGroupItem>Stock Frame</ListGroupItem>
    <ListGroupItem>Magazine</ListGroupItem>
    <ListGroupItem>Weight</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Detail Page Link</Card.Link>
    <Card.Link href="#">Add to Cart</Card.Link>
  </Card.Body>
</Card>
    )
}

export default SingleProduct


