import React, { PureComponent } from 'react'
import axios from 'axios'
// var Client = require('ftp');
var csv = require('fast-csv');
var parser = require('fast-xml-parser');
var convert = require('xml-js');
var fs = require('fs'),
xml2js = require('xml2js');
 

class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }


    componentDidMount() {
        var jsonStr;
        var jsonObj;
        var xmlData;
        //  axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/CategorySearchFieldsDS?CustomerNumber=99994&UserName=99994&Password=99998&Source=47538')
        axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/DailyItemUpdate?CustomerNumber=99994&UserName=99994&Password=99998&LastUpdate=9/17/2019&LastItem=1&Source=')
         .then(xmlData => {
             console.log("XML", xmlData)
             this.setState({posts: xmlData.data });
            xmlData = xmlData.data
             var parser = new xml2js.Parser(/* options */);
             parser.parseStringPromise(xmlData).then(function (result) {
               console.log("this is the result", result);
               console.log('Done');
             })
             
           
             //  jsonStr = parser.parse(xmlData.data);
            //   console.log("json", jsonStr)
             
             //  var result1 = convert.xml2json(xmlData.data, {compact: false, spaces: 6});
             //  console.log("result1", result1);

              
         }
         )}



    //         var jsonObj;
    //         var xmlData;
    //     //  axios.get('https://jsonplaceholder.typicode.com/posts')
    //      axios.get('/smart/inventory.asmx/ActiveItemCount?CustomerNumber=99994&UserName=99994&Password=99998&Source=47538', {
    //           headers: { 'Access-Control-Allow-Origin' : 'http://localhost:*'},
    //           proxy: { host: "webservices.theshootingwarehouse.com"}})
   

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div> 
               Retrieving all items
            </div>
        )
    }
}

export default PostList



//Potential way to parse data
//              var parseString = require('xml2js').parseString;
//             var xml = "<root>Hello xml2js!</root>"
//             parseString(xml, function (err, result) {
//              console.dir(result, "this is the result");
// });