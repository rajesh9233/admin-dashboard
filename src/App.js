import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ButtonsList from "./Components/ButtonsList";
import Cards from "./Components/Cards";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/buttons" component={ButtonsList} />
            <Route path="/cards" component={Cards} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
