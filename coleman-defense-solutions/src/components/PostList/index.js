import React, { PureComponent } from 'react'
import axios from 'axios'


class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        //  axios.get('https://jsonplaceholder.typicode.com/posts')
         axios.get('http://webservices.theshootingwarehouse.com/smart/Inventory.asmx')
         .then(response => {
             console.log(response)
         })
         .catch(error => {
             console.log(error)
         })
    }

    render() {
        return (
            <div> List of Posts </div>
        )
    }
}

export default PostList