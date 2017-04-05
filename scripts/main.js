import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Navigation } from 'react-router'

class StorePicker extends React.Component {
  render(){
    return(
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeId" required/>
        <input type="submit"/>
      </form>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory/>
    </div>
    )
  }
}

/* 
  Header
 */ 

class Header extends React.Component {
  render() {
    return(
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
        Day</h1>
        <h3 className="tagline"><span>{ this.props.tagline }</span></h3>
      </header>
    )
  }
}

/* 
  Order
 */ 

class Order extends React.Component {
  render() {
    return(
      <p>Order</p>
    )
  }
}

/* 
  Inventory
 */ 

class Inventory extends React.Component {
  render() {
    return(
      <p>Not Found</p>
    )
  }
}

/* 
  Not Found
 */ 

class NotFound extends React.Component {
  render() {
    return(
      <h1>Not Found</h1>
    )
  }
}


/* 
  Routes
 */


ReactDOM.render(
  <Router>
    <Route path="/" component={StorePicker}/>
    <Route path="/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('main')
)