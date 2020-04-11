import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from './components/pages/About';
import Debtors from "./components/debtors/Debtors";
import AddDebtor from "./components/debtors/AddDebtor";
import EditDebtor from './components/debtors/EditDebtor';

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";

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
                <Route exact path="/debtor/edit/:id" component={EditDebtor} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
