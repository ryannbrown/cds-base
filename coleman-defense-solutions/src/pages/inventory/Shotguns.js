import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginationComponent from "../../components/Pagination"
import "../Home";
import Nav from "../../components/Navbar";
import SingleProduct from "../../components/SingleProduct";
import ProductList from "../../components/ProductList";
import CategoryName from "../../components/CategoryName/CategoryName";
import ProductInformation from "../../components/ProductInformation";
import { resolveNaptr } from "dns";
import xml2js from 'xml2js';
import axios from "axios";
import App from "../../App";
import Spinner from 'react-bootstrap/Spinner';
import * as firebase from 'firebase';

require("dotenv").config();

class Shotguns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gunData: [],
      isLoaded: false,
      category: "Shotguns",
      catData : []
    };
    // this.fetchCategories = this.fetchCategories.bind(this)
  }


  componentDidMount() {

    var query = [];
    var searchNumber= 0;
    var apiCall = 'coleman-defense-solutions';
    fetch('https://' + apiCall +'.firebaseio.com/NewDataSet/Table.json?orderBy="$key"&limitToFirst=1000')
      .then(res => res.json())
      .then(json => {
        // console.log("json", json)
      var childData = json;
      // console.log("CATID?", childData[0].CATID)
      // console.log(childData.length)
              // console.log(key)
              for (var i = 0; i < childData.length; i++) {
              if (childData[i].CATID == '48' && searchNumber < 40) {
                // console.log("Shotguns", childData[i])
                query.push(childData[i]);
                searchNumber++;
            
              }
            }
            // console.log("query", query)
            this.setState({
              gunData: query,
              isLoaded: true
            })
            console.log("state", this.state.gunData)
            
          });
          this.fetchCategories();
        };
  

  
        fetchCategories() {
          const gunCategory = this.state;
          var apiCatCall = 'coleman-defense-testing';
          fetch('https://' + apiCatCall +'.firebaseio.com/NewDataSet/Table.json?orderBy="$key"')
          .then(res => res.json())
          .then(cat => {
                    console.log("jsonnnn", cat[46])
                    this.setState({catData: cat[46]})
                    console.log("gun cats", this.state.catData)
                    })       
            }
      



  render() {
    var { gunData, isLoaded, category, catData} = this.state;
    if (!isLoaded) {
      return <div className="text-center mt-20"><Spinner animation="border" /></div>;
    } else {
      return (
      <Router>
        <div>
        <CategoryName
            category={category}
            />
         <ProductList guns={gunData} catData={catData}/>
         {/* <ProductInformation/> */}
        </div>
        </Router>
        
      );
    }
  }
}

export default Shotguns;
