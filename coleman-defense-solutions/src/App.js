import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import SingleProduct from "./components/SingleProduct"
import PostList from "./components/PostList"


class App extends React.Component {


  componentDidMount() {

    fetch('').then((Response) =>Response.json()).then((findresponse)=>
    {
      console.log(findresponse)
    })
  }
  render() {
    return (
      <Router>
        <div className="App">

          <Nav />

          <SingleProduct/>
          <PostList/>
          {/* <Switch>
        <Route exact path="/" component={() =>
                <Home
                  user={this.state.name}
                  isloggedIn={this.state.isloggedIn}
                />} />

              <Route exact path="/compact" component={() =>
                <Home2
                  user={this.state.name}
                  isloggedIn={this.state.isloggedIn}
                />} />
              <Route exact path="/profile" component={() =>
                <Profile
                  user={this.state.name}
                  isloggedIn={this.state.isloggedIn}
                />} />
              </Switch> */}
        </div>
      </Router>


    );
  }
}


export default App;
