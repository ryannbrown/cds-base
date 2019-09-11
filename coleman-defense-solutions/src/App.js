import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import SingleProduct from "./components/SingleProduct"

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
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />

          <Nav />

          <SingleProduct/>
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
