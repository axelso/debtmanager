import React, {Component} from 'react';
import Debtor from './components/Debtor';
import Header from './components/Header';
import Debtors from './components/Debtors';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header branding="Debtor Manager" />
				<div className="container">
          <Debtors />
				</div>
      </div>
    );
  }
}

export default App;
