import React, {Component} from 'react';
import Header from './components/Header';
import Debtors from './components/Debtors';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Debtor Manager" />
          <div className="container">
            <Debtors />
          </div>
        </div>
      </Provider>
      
    );
  }
}

export default App;
