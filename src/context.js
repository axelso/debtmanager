import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_DEBTOR':
      return {
        ...state, 
        debtors: state.debtors.filter(debtor => debtor.id !== action.payload)
      }; 
    case 'ADD_DEBTOR':
      return {
        ...state, 
        debtors: [action.payload, ...state.debtors]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    debtors: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.setState({
        debtors: response.data
      }));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
