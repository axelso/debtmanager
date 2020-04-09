import React, {Component} from "react";
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';

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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      className="form-control form-control-lg" 
                      type="text"
                      placeholder="Enter Name..."
                      name="name"
                      value={name}
                      onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      className="form-control form-control-lg" 
                      type="email"
                      placeholder="Enter Email..."
                      name="email"
                      value={email}
                      onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      className="form-control form-control-lg" 
                      type="text"
                      placeholder="Enter Phone..."
                      name="phone"
                      value={phone}
                      onChange={this.onChange}/>
                  </div>
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
