
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import App from '../../App'
import AddItem from '../AddItem'


class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editSession: false,
            posts:[],
            updatePosts: false
        };
        this.handleDelete = this.handleDelete.bind(this);
    }



    addItem = (event) => {
       this.setState({
            editSession:true
        })
    }


    handleDelete(id) {
        let item_id = id
        console.log("deleting", item_id)

       function deleteItem(){
           console.log("posting to DB")
            // POST TO DB
            fetch('/api/remove_post', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: item_id,
                })
            })
         
        }
        deleteItem();
        window.location.reload();
    }

componentDidMount() {
        fetch(`/api/posts`)
        .then(res => res.json())
        .then(json => {
          console.log("json", json)
          this.setState({
              posts:json.data
          })
        })
    }

    render() {
        console.log(this.state.posts)
        const { editSession } = this.state;
        const items = this.state.posts.map((item, i) =>
        <Card className= 'card'>
            <i onClick={() => this.handleDelete(item.id)} class="fas fa-trash-alt delete-icon"></i>
            <p className="text-center">${item.product_name}</p>
       {/* <img className="gun-img" alt={`${item.itemdesc1}`}
       // TODO: come up with better way to get images than this solution
        src={`https://www.davidsonsinc.com/ProdImageSm/${item.item_no}.jpg`}
        onError={this.usePlaceholderImg}
        /> */}
         <p className="text-center">{item.product_description}</p>
         <p className="text-center">{item.msrp_price}</p>
         <p className="text-center">{item.sale_price}</p>
         
        </Card>
        );

        const placeholderText = <div>There are no items in inventory</div>


        if (editSession) {
            return (
                <AddItem></AddItem>
            )
        }

        if (this.state.posts.length === 0) {
            return (
                <div className="text-center m-5">
                    <Button onClick={this.addItem}>Add Item</Button>
                    <div className="mt-5">Current Inventory:</div>
                    <div className="mt-3">
                    {placeholderText}
                    </div>                
                </div>
            )
        }

        if (!editSession) {
         
            return (

                <div className="text-center m-5">
                    <Button onClick={this.addItem}>Add Item</Button>
                    <div className="mt-5">Current Inventory:</div>
                    <CardDeck>
                     {items}
                    </CardDeck>

                </div>
            )
        } 
    }
}
export default AdminPanel




