import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Debtor extends Component {
  state = {
    showDebtorInfo: false
  };

  onShowClick = e => {
    this.setState({showDebtorInfo: !this.state.showDebtorInfo});
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type: 'DELETE_DEBTOR', payload: id});
  }

  render() {
		const { id, name, email, phone } = this.props.debtor;
    const { showDebtorInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>{name} 
                <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: 'pointer'}} /> 
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" 
                  style={{cursor: 'pointer', float: 'right', color: 'red'}} />
                <Link to={`debtor/edit/${id}`}>
                  <i className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}></i>
                </Link>
              </h4>
              {showDebtorInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )     
        }}
      </Consumer>
    );
  }
}

Debtor.propTypes = {
	debtor: PropTypes.object.isRequired
}

export default Debtor;
