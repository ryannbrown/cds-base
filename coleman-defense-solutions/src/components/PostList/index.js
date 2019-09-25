import React, { PureComponent } from 'react'
import axios from 'axios'
// var Client = require('ftp');
// var csv = require('fast-csv');
// var parser = require('fast-xml-parser');
// var convert = require('xml-js');
var fs = require('fs'),
xml2js = require('xml2js');
var xmlData;
class PostList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            errorMsg: '',
            gunName1: [],
            gunName2: [],
            gunName3: []
        }
        // this.posts= this.posts.bind(this);
    }
    
    componentDidMount() {
        //  axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/CategorySearchFieldsDS?CustomerNumber=99994&UserName=99994&Password=99998&Source=')
        axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/DailyItemUpdate?CustomerNumber=99994&UserName=99994&Password=99998&LastUpdate=9/17/2019&LastItem=1&Source=')
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
               posts: result
            });
            console.log("final state after parse", this.state.posts)
            console.log("specific name", this.state.posts.NewDataSet.Table[0].IDESC)
            this.setState({gunName1: this.state.posts.NewDataSet.Table[0].IDESC })
            this.setState({gunName2: this.state.posts.NewDataSet.Table[1].IDESC })
            this.setState({gunName3: this.state.posts.NewDataSet.Table[2].IDESC })
            })
    })
    }
    
    render() {
        const { posts} = this.state
        return (
<div>
<p> Helloooo</p> 
          <p>{this.state.gunName1}</p>
          <p>{this.state.gunName2}</p>
          <p>{this.state.gunName3}</p>

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
export default PostList
//Potential way to parse data
//              var parseString = require('xml2js').parseString;
//             var xml = "<root>Hello xml2js!</root>"
//             parseString(xml, function (err, result) {
//              console.dir(result, "this is the result");
// });