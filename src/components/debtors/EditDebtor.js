import React, {Component} from "react";
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditDebtor extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }  

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const debtor = response.data;
    this.setState({
      name: debtor.name,
      email: debtor.email,
      phone: debtor.phone
    })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });    
  onSubmit = async (dispatch, e) => {
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

    const updatedDebtor = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const response = 
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
          updatedDebtor);

    dispatch({type: 'UPDATE_DEBTOR', payload: response.data})

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
                Edit Debtor
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
                    value="Update Debtor" />
                </form>
              </div>
            </div>      
          )
        }}
      </Consumer>
    )
  }
}

export default EditDebtor;
