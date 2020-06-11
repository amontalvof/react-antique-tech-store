import React from "react";
import "./App.css";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import Error from "./pages/ErrorPage";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetailsPage";
import Products from "./pages/ProductsPage";
// components
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Navbar from "./components/Navbar/";

import { Application } from "react-rainbow-components";

const theme = {
  rainbow: {
    palette: {
      error: "#FE4849",
      brand: "#6860db",
      mainBackground: "#ebeafa",
    },
  },
};

function App() {
  return (
    <Router>
      <ScrollToTop>
        <React.Fragment>
          <Application theme={theme}>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/product/:id" children={<ProductDetails />}>
                {/*whenever we're dealing with url parameters we're going to use children prop */}
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </Application>
        </React.Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
