import React, { Component } from "react";

// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginationComponent from "../components/Pagination"
import "./Home.css";
import Nav from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";
import ProductList from "../components/ProductList";
import { resolveNaptr } from "dns";
import xml2js from 'xml2js';
import axios from "axios";
import App from "../App";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CarouselSlider from "../components/Carousel"

require("dotenv").config();

function Home (props) {
    return (
<content>
    <div className="home-parent">
    <h1 className="home-title">Coleman Defense Solutions</h1>
    </div>

    {/* <CarouselSlider></CarouselSlider> */}



    {/* <h2 className="text-center mt-5 mb-5">
        What We Are About
    </h2> */}
    {/* <Container> */}

   
    {/* <Row className="feature-list mb-5">
        {/* <Col xs={4} className="text-center">Quality Firearms <br></br><i class="fas fa-check"></i></Col>
        <Col xs={4} className="text-center">Top Notch Customer Service <br></br> <i class="far fa-smile-beam"></i></Col>
        <Col xs={4} className="text-center">Wholesale Prices <br></br> <i class="far fa-money-bill-alt"></i></Col> */}
    {/* </Row> */}

    {/* </Container> */}
    <Container className="pick-up-container">
    <Row className="pick-up-box mt-5">
        <Col md={6} sm={12} lg={6}><Image className="center-block" style={{maxWidth: '75%'}} src="https://firebasestorage.googleapis.com/v0/b/coleman-defense-solutions.appspot.com/o/jay-heike-CR-3wJJVlU4-unsplash%20(1).jpg?alt=media&token=3d2e5253-e370-42b3-b7c2-02e567789a55" rounded fluid></Image></Col>
        <Col md={6} sm={12} lg={6}>
        <div>
            <h2>Firearm Sales and Transfers</h2>
        </div>
            <p> We are an FFL and Class 3 SOT licensed dealer. We specialize in the AR platform and carry out NFA sales and transfers. Order by phone by providing the item number of what you are interested in. You can pickup items from office location.
            </p>

            </Col>
    </Row>
    <Row className="pick-up-box mt-5">
        <Col md={6} sm={12} lg={6}><div>
            <h2>Law Enforcement Supply</h2></div>
            <p>We offer quality solutions for law enforcement and other government agencies. Located in Durham, NC, we serve the Triangle area and beyond. 
                 We are a direct dealer for LMT Defense and Aero Precision.
            </p>

            </Col>
        <Col md={6} sm={12} lg={6}><Image className="center-block" style={{maxWidth: '75%'}} src="https://firebasestorage.googleapis.com/v0/b/coleman-defense-solutions.appspot.com/o/specna-arms-ck-UftftEGs-unsplash.jpg?alt=media&token=e2732c75-0816-4b21-a4f5-df4839f100d3" rounded fluid></Image></Col>
    </Row>
    </Container>
    <Card.Footer className="text-muted text-center mt-5">
    <h4>Coleman Defense Solutions, LLC</h4>
    <h5>Contact Us</h5>
    <h5><a target="_blank" href="https://www.facebook.com/colemandefense/"><i class="fab fa-facebook mr-5"></i></a><a target="_blank" href="https://www.instagram.com/colemandefense/"><i class="fab fa-instagram"></i></a></h5>
    <h5>Call: <a href="tel:919-357-1884">919-357-1884</a></h5>
    <h5>Email: <a href="mailto:info@colemandefense.com">info@colemandefense.com</a></h5>

    
    </Card.Footer>
</content>
    )
}




export default Home;
