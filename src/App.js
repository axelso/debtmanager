import React, {Component} from 'react';
import Debtor from './components/Debtor';
import Header from './components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
				<Header branding="Debtor Manager" />
				<Debtor name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
				<Debtor name="Karen Smith" email="karen@gmail.com" phone="333-333-3333" />
      </div>
    );
  }
}

export default App;
