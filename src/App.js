import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from './components/pages/About';
import Debtors from "./components/debtors/Debtors";
import AddDebtor from "./components/debtors/AddDebtor";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Debtor Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Debtors} /> 
                <Route exact path="/debtor/add" component={AddDebtor} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
