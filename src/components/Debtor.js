import React, {Component} from "react";
import PropTypes from 'prop-types';

class Debtor extends Component {
  render() {
		const { name, email, phone } = this.props.debtor;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Debtor.propTypes = {
	debtor: PropTypes.object.isRequired
}

export default Debtor;
