import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart.component";
import Home from "./Home.component";




function App() {

  return(
    <Home/>
  )

export default App;
