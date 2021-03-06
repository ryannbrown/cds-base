import React, { Component, Fragment } from "react";
// import "../Home";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';

const queryString = require('query-string');

require("dotenv").config();

class Transfers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      catData: []
    };
  }

  componentDidMount() {

   console.log(this.props.match.params)

   let param = Object.values(this.props.match.params);

    fetch(`/browse/${param}`)
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        // TO DO: map through the possible values with below code to map out critera

        var size = Object.keys(json.data).length;
        var criteriaVals = [];
        for (var i = 0; i < size; i++) {
          // console.log(Object.values(json.data[i]))
          criteriaVals.push(Object.values(json.data[i]))
        }
        console.log(criteriaVals)
        // var descriptionValues = Object.values(json.data)
        //  console.log(Object.keys(json.data[0]))
        // var descriptionKeys = Object.keys(json.data[0])
        // var descriptionValues = Object.values(json.data[0])
        // console.log(Array.prototype.push.apply(descriptionKeys,descriptionValues))
        // console.log(descriptionKeys)
        // console.log(descriptionValues)
        // console.log(Object.values(json.data[0]))
        this.setState({
          data: criteriaVals,
          isLoaded: true
        })
        console.log(this.state.data);
        var size = Object.keys(this.state.data).length;
        console.log(size);
      });
  };




  render() {

    return (
      <Fragment>
      {/* <Header><Letter /></Header> */}
      <a href="/">
          <Button variant="dark" style={{backgroundColor:'#dd6717'}} className="transf-back-btn">Back</Button>
          
          </a>
      <h1 className="text-center mt-5">Firearm Transfer Services</h1>
     <div className="bio-text-transfer text-center">
  
     <p>I offer transfer services for all types of firearms and NFA items.</p>

     <p style={{color: '#dd6717'}}>*Pickup by appointment only.</p>

      <p>Pricing:</p>

      <p>Long Guns & Handguns:</p>
      <p>$20 per transfer</p>
  
      <p>Class 3/NFA Transfers:</p>
      <p>$50 per transfer</p>
      <p>Firearms shipped from non FFL holders are accepted. All private sale shipments must include a copy of the shippers drivers license or the firearm will not be logged in and transfered to the receiver</p>
      <p>Shipping to another FFL will include shipping charges plus above fees</p>
      <p>Send a copy of your transfering FFL to: 
      <a style={{color:'blue'}} href="mailto: ffl@colemandefense.com"> FFL@colemandefense.com</a></p>
      <p>Use the 
      <a style={{color:'blue'}} target="_blank" href="https://fflezcheck.atf.gov/fflezcheck/"> ATF EZ Check</a> to verify my license:</p>
      <p className="ba b--dotted bw2">1-56-XXX-XX-XX-13252</p>
      <p>Payment can be made at time of transfer with cash, check, or credit card.</p>
      <p>All major credit cards are accepted with an additional 3.99% processing fee added to the total.</p>
     </div>

    </Fragment>
    );
  }
}

export default Transfers;
