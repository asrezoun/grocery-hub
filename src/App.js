import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Header from './Components/Header/Header';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Checkout from './Components/Checkout/Checkout';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
// const express = require('express')
// const app = express()
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors());
// app.use(bodyParser.json());
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/manageProducts">
          <ManageProduct></ManageProduct>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
          <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
              <Home/>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
