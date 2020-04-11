import React, {Component} from "react";
import axios from 'axios';
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddDebtor extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }  
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });    
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      })
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      })
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is required'
        }
      })
      return;
    }

    const newDebtor = {
      id: uuidv4(),
      name,
      email,
      phone
    };

    axios.post('https://jsonplaceholder.typicode.com/users/', newDebtor)
      .then(response => dispatch({type: 'ADD_DEBTOR', payload: response.data}));

    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');

  }

  render() {
    const { name, email, phone, errors } = this.state;    

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
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
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
