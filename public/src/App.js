import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" components={ProductList} />
        <Route path="/details" components={Details} />
        <Route path="/cart" components={Cart} />
        <Route components={Default} />
      </Switch>
      <Modal />
      <Header />
      <Home />
    </React.Fragment>
  
  );
}

export default App;
