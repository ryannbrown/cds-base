import React, { PureComponent } from 'react'
import axios from 'axios'


class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }


    componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/posts')
        //  axios.get('http://webservices.theshootingwarehouse.com/smart/Inventory.asmx')
         .then(response => {
             console.log(response)
             this.setState({posts: response.data
            })
//              var parseString = require('xml2js').parseString;
//             var xml = "<root>Hello xml2js!</root>"
//             parseString(xml, function (err, result) {
//              console.dir(result, "this is the result");
// });
         })
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
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList