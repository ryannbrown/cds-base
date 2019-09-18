import React, { PureComponent } from 'react'
import axios from 'axios'
var Client = require('ftp');
var csv = require('fast-csv');
var parser = require('fast-xml-parser');
 

class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }


    componentDidMount() {
        var jsonObj;
        var xmlData;
        //  axios.get('https://jsonplaceholder.typicode.com/posts')
         axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/CategorySearchFieldsDS?CustomerNumber=99994&UserName=99994&Password=99998&Source=47538')
         .then(xmlData => {
             console.log(xmlData.data)
             this.setState({posts: xmlData.data })
             jsonObj = parser.parse(xmlData.data);
              console.log(jsonObj)
        })
}



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
                List of Posts
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