import React, {Component} from "react";
import PropTypes from 'prop-types';

class Debtor extends Component {
  state = {
    showDebtorInfo: false
  };

  onShowClick = e => {
    this.setState({showDebtorInfo: !this.state.showDebtorInfo});
  }

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() {
		const { name, email, phone } = this.props.debtor;
    const { showDebtorInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name} 
          <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: 'pointer'}} /> 
          <i onClick={this.onDeleteClick} className="fas fa-times" 
            style={{cursor: 'pointer', float: 'right', color: 'red'}} />
        </h4>
        {showDebtorInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Debtor.propTypes = {
	debtor: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Debtor;
