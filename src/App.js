import React, { Component } from 'react';
/*Components*/
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart />
        <Checkout />
      </div>
    );
  }
}

export default App;
