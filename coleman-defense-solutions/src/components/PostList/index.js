import React, { PureComponent } from 'react'
import axios from 'axios'
var Client = require('ftp');
var csv = require('fast-csv');
 

class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }


    componentDidMount() {
        var hostName = "ftp.davidsonsinventory.com";
        var userName = "ftp58074930-1e";
        var password = "DavDealerInv";
        var fileName = 'davidsons_firearm_attributes.csv';
        var c = new Client();
        c.on('ready', function() {
            c.get(fileName, function(err, stream) {
                if (err) throw err;
                stream.once('close', function() { c.end(); });
                csv.fromStream(stream,  {headers: true})
                    .on("data", function(data){
                    console.log(data);
                })
                    .on("end", function(){
                        console.log("done");
                    });
            });
        });
        c.connect({host:hostName,
            user: userName,
            password:password
        })

        

        
        //  axios.get('https://jsonplaceholder.typicode.com/posts')
        // //  axios.get('http://webservices.theshootingwarehouse.com/smart/Inventory.asmx')
        //  .then(response => {
        //      console.log(response)
        //      this.setState({posts: response.data
        //     })

        //  })
         .catch(error => {
             console.log(error)
             this.setState({errorMsg: 'Error retreiving data'})
         })
    }

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