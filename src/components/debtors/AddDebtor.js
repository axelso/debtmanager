import React, {Component} from "react";
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddDebtor extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }  
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });    
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newDebtor = {
      id: uuidv4(),
      name,
      email,
      phone
    };

    dispatch({type: 'ADD_DEBTOR', payload: newDebtor});
  }

  render() {
    const { name, email, phone } = this.state;    

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Debtor
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    type="email"
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                  <input className="btn btn-light btn-block" type="submit" 
                    value="Add Debtor" />
                </form>
              </div>
            </div>      
          )
        }}
      </Consumer>
    )
  }
}

export default AddDebtor;
