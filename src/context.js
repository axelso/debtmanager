import React, { Component } from 'react'

const Context = React.createContext();

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
    ]
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
