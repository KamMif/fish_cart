import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Navigation, browserHistory } from 'react-router'
import helpers from './helpers'

class StorePicker extends React.Component {
  mixins = [browserHistory]
  goToStore = function(event) {
    event.preventDefault();
    // get the data from the input
    const storeId = this.refs.storeId.value;
    browserHistory.push(null, '/store' + storeId)
  }
  render(){
    return(
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required/>
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
      <p>Inventory</p>
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