import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_DEBTOR':
      return {
        ...state, 
        debtors: state.debtors.filter(debtor => debtor.id !== action.payload)
      }; 
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    debtors: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Alice Doe',
        email: 'adoe@gmail.com',
        phone: '555-555-5555'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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
