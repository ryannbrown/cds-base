import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import logo from "./logo.svg";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PaginationComponent from "./components/Pagination"
import "./App.css";
import Nav from "./components/Navbar";
// import SingleProduct from "./components/SingleProduct";
// import ProductList from "./components/ProductList";
// import { resolveNaptr } from "dns";
// import xml2js from 'xml2js';
// import axios from "axios";
import Home from '../src/pages/Home';
import About from '../src/pages/index.js';
import Shotguns from './pages/inventory/Shotguns';
import Pistols from './pages/inventory/Pistols';
import Rifles from './pages/inventory/Rifles';
import Inventory from './pages/inventory/Inventory';
import Browse from './pages/inventory/Browse';
import Details from './pages/inventory/Details';
import AdminPage from './pages/admin/admin';
import CdsInventory from "./pages/inventory/CdsInventory";
import Transfers from "./pages/Transfers.js"
// import transfers from "./pages/transfers.js ";


export default function App(){

  return (
      <Router>
        <div>
          <Nav></Nav>
      
           <Switch>
             <Route exact path="/" component={() =>
                 <Home
                 />} />  
          <Route path="/about" component={() =>
              <About
              />} />
       
          <Route path="/shotguns" component={() =>
              <Shotguns
              />} />
          <Route path="/pistols" component={() =>
              <Pistols
              />} />
          <Route path="/rifles" component={() =>
              <Rifles
              />} />

          <Route path="/browse/:criteria" component={Browse}/>
              
          <Route path="/inventory/:brand_name" component={Inventory}/>

          <Route path="/api/model/:item_no" component={Details}/>

          <Route path="/admin" component={AdminPage}/>

          <Route path="/api/post" component={AdminPage}/>

          <Route path="/cds/inventory" component={CdsInventory}/>
          <Route path="/cds/transfers" component={Transfers}/>
          {/* <Route path="/cds/transfers" component={transfers}/> */}

     
          </Switch> 

         
        </div>
        </Router>
        
      );


// function Child() {
//   let { brand_name } = useParams();
// }

    }

