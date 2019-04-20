import React, { Component } from 'react';
import './App.css';
/*Components*/
import Cart from "./components/Cart/Cart";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart />
      </div>
    );
  }
}

export default App;
