import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginationComponent from "../../components/Pagination"
import "../Home";
import Nav from "../../components/Navbar";
import SingleProduct from "../../components/SingleProduct";
import ProductList from "../../components/ProductList";
import CategoryName from "../../components/CategoryName/CategoryName";
import { resolveNaptr } from "dns";
import xml2js from 'xml2js';
import axios from "axios";
import App from "../../App";
import Spinner from 'react-bootstrap/Spinner';
import * as firebase from 'firebase';

require("dotenv").config();

class Pistols extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gunData: [],
      isLoaded: false,
      category: "Pistols",
      catData: []
    };
  }

  componentDidMount() {
    var query = [];
    var searchNumber= 0;
    var apiCall = 'coleman-defense-solutions';
    fetch('https://' + apiCall +'.firebaseio.com/NewDataSet/Table.json?orderBy="$key"&limitToFirst=500')
      .then(res => res.json())
      .then(json => {
        // console.log("json", json)
      var childData = json;
    //   console.log("CATID?", childData[0].CATID)
      // console.log(childData.length)
              // console.log(key)
              for (var i = 0; i < childData.length; i++) {
              if (childData[i].CATID == '26' && searchNumber < 25) {
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
            // console.log("query", query);
              // console.log(hasCat)
              // console.log("it happened")
          });
          this.fetchCategories();
        };


      //   this.setState({
      //     isLoaded: true,
      //     gunData: json
      //   });
      //   console.log("state", this.state.gunData)
      // });
      // this.fetchCategories();


    // below works but is slow


//     var firebaseConfig = {
//       apiKey: "AIzaSyDervZNgTYm-LKefg5EaDNtN7Q4G5aN_EU",
//       authDomain: "coleman-defense-solutions.firebaseapp.com",
//       databaseURL: "https://coleman-defense-solutions.firebaseio.com",
//       projectId: "coleman-defense-solutions",
//       storageBucket: "coleman-defense-solutions.appspot.com",
//       messagingSenderId: "24956711199",
//       appId: "1:24956711199:web:949fb7f5e25c7b29cac02a",
//       measurementId: "G-GGZVN7LDM7"
//     };
//     // Initialize Firebase
//     // firebase.initializeApp(firebaseConfig);
//     // firebase.analytics();

//     firebase.initializeApp(firebaseConfig);
//       var database = firebase.database();
//       var query = firebase.database().ref("NewDataSet/Table/").orderByKey();
//       console.log("ok so far", query)
// query.once("value")
//   .then(snapshot => {
//     var searchNumber = 1;
//     let query = [];
//     snapshot.forEach((childSnapshot) => {
//       var hasCat = childSnapshot.numChildren()
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//       // console.log(key)
//       if (childData.CATID == '48' && searchNumber <= 25) {
//         console.log("Shotguns", childData)
//         query.push(childData);
//         searchNumber++;
//       }
     
//       // console.log(hasCat)
//       // console.log("it happened")
//   });
//   console.log("query", query)
//   this.setState({
//     gunData: query,
//     isLoaded: true
//   })
//   console.log("state", this.state.gunData)
// });

// this works but its slow ^ 

    //   var ref = database.ref('NewDataSet/Table');
    //   ref.on('value',gotData);
    // function gotData(data) {
    //   // console.log("this is data", data.val());
    //   var data = data.val();
    //   var keys = Object.keys(data);
    //   console.log("keys", keys);
    //   for (var i = 0; i < 5; i++) {
    //   var k = keys[i];
    //   var gunNames = JSON.stringify(data[k].SHDESC[0]);
    //   var itemNo = JSON.stringify(data[k].ITEMNO[0]);
    //   // var gunDesc = JSON.stringify(data[k].IDESC[0]);
    //   // var gunNames = JSON.stringify(data[k].SHDESC[0]);
    //   var gunPurpose = JSON.stringify(data[k].IPURPOSE[0]);
    //   var itemQuantity = JSON.stringify(data[k].QTYOH[0]);
    //  console.log(gunNames, itemQuantity)
    //   }
  // }

//     var query = firebase.database().ref("table").orderByKey();
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//       console.log("key", key)
//       console.log("this happened")
//   });
// });
  

  fetchCategories() {
    const gunCategory = this.state;
    var apiCatCall = 'coleman-defense-testing';
    fetch('https://' + apiCatCall +'.firebaseio.com/NewDataSet/Table.json?orderBy="$key"')
    .then(res => res.json())
    .then(cat => {
              console.log("jsonnnn", cat)
              this.setState({catData: cat[25]})
              console.log("gun cats", this.state.catData)
              })       
      }

    
  


  render() {
    var { gunData, isLoaded, catData, category} = this.state;
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
        </div>
        </Router>
        
      );
    }
  }
}

export default Pistols;
