import React, {Component} from 'react';
import Debtor from './components/Debtor';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
				<Debtor />
				<Debtor />
				<Debtor />
      </div>
    );
  }
}

export default App;
