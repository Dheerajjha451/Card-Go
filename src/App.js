import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
//Components
import Header from "./Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </>
  );
}
