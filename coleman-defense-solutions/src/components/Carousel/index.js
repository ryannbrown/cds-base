import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import App from '../../App'


const CarouselSlider = (props) => {

    return ( 
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/coleman-defense-solutions.appspot.com/o/jay-heike-CR-3wJJVlU4-unsplash%20(1).jpg?alt=media&token=3d2e5253-e370-42b3-b7c2-02e567789a55"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/coleman-defense-solutions.appspot.com/o/specna-arms-ck-UftftEGs-unsplash.jpg?alt=media&token=e2732c75-0816-4b21-a4f5-df4839f100d3"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/coleman-defense-solutions.appspot.com/o/specna-arms-ADR-OV5gpQ8-unsplash.jpg?alt=media&token=865307eb-4b6d-4d44-85b9-1949a126221a"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default CarouselSlider