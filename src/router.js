import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";

import Cursos from "./pages/Admin/Cursos/Cursos";
import DetailCurso from "./pages/Admin/DetailCurso/DetailCurso";
import Home from "./pages/Public/Home/Home";
import Signin from "./pages/Public/Signin/Signin";
import Signup from "./pages/Public/Signup/Signup";
import CartPage from "./pages/Public/CartPage/CartPage";

//context
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

export default function AppRouter() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div>
            {/*Inicio Header */}
            <Header />
            {/*Fin Header */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/cursos">
                <Cursos />
              </Route>
              <Route exact path="/cursos/:id">
                <DetailCurso />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/cart/:id">
                <CartPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
