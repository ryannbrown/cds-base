import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";
import PostList from "./components/PostList";
import axios from 'axios'
// var Client = require('ftp');
// var csv = require('fast-csv');
// var parser = require('fast-xml-parser');
// var convert = require('xml-js');
var fs = require('fs'),
xml2js = require('xml2js');


  class App extends PureComponent {
      constructor(props) {
          super(props)
          this.state = {
              posts: {},
              errorMsg: ''
          }
      }
      
      componentDidMount() {
          //  axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/CategorySearchFieldsDS?CustomerNumber=99994&UserName=99994&Password=99998&Source=')
          axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/DailyItemUpdate?CustomerNumber=99994&UserName=99994&Password=99998&LastUpdate=9/22/2019&LastItem=-1&Source=')
          .then(xmlData => {
              //shows XML
              console.log("XML", xmlData)
              this.setState({posts: xmlData.data });
              console.log("this is state", this.state.posts)
              xmlData = xmlData.data;
          })
      }
      
      componentDidUpdate() {
          // console.log("parsing")
      //first parse to get result in XML format only
      var parser = new xml2js.Parser(/* options */);
      parser.parseStringPromise(this.state.posts).then(result => {
        console.log("this is the result", result.string._);
        console.log('Done');
       //second parse to turn XML tables into JSON
              var slightParse = result.string._ 
              var parser = new xml2js.Parser(/* options */);
              
             parser.parseStringPromise(slightParse).then(result => {
          //    console.log("this is the 2nd result", result);
          //    console.log('Done')
             this.setState({ 
                 posts: result.NewDataSet.Table[0]
              });
              console.log("final state after parse", this.state.posts)
              // console.log("specific name", this.state.posts[0]["0"]);
              })
      })
      }
      
      render() {
          return (
  
  
  <div>
              <Nav></Nav>
              <p> Helloooo</p> 
              <SingleProduct  itemDesc={this.state.posts.SHDESC}/>
              <SingleProduct/>
              <SingleProduct/>
  
  </div>
            
          // <span>
          //     {/* // This will go through all the elements in arrayFromJson and
          //     // render each one as a <SomeComponent /> with data from the object */}
          //     {this.state.posts.map(function(object) {
          //       return (
          //         <PostList key={this.state.posts.NewDataSet.Table} data={object} />
          //       );
          //     })}
          //   </span>
          )
      }
  }





  // componentDidMount() {

  //   fetch('').then((Response) =>Response.json()).then((findresponse)=>
  //   {
  //     console.log(findresponse)
  //   })
  // }
  // render() {
  //   return (
  //     <Router>
  //       <div className="App">

  //         <Nav />

  //         <SingleProduct/>
  //         <PostList/>
  //         {/* <Switch>
  //       <Route exact path="/" component={() =>
  //               <Home
  //                 user={this.state.name}
  //                 isloggedIn={this.state.isloggedIn}
  //               />} />

  //             <Route exact path="/compact" component={() =>
  //               <Home2
  //                 user={this.state.name}
  //                 isloggedIn={this.state.isloggedIn}
  //               />} />
  //             <Route exact path="/profile" component={() =>
  //               <Profile
  //                 user={this.state.name}
  //                 isloggedIn={this.state.isloggedIn}
  //               />} />
  //             </Switch> */}
  //       </div>
  //     </Router>


  //   );
  // }



export default App;
