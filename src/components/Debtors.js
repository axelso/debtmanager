import React, {Component} from "react";
import Debtor from './Debtor';


class Debtors extends Component {
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

  deleteDebtor = id => {
    const { debtors } = this.state;
    const newDebtors = debtors.filter(debtor => debtor.id !== id);
    this.setState({
      debtors: newDebtors,
    })
    console.log(newDebtors);
  }

	render() {
    const { debtors } = this.state;

		return (
			<React.Fragment>
		    {debtors.map(debtor => (
          <Debtor 
            key={debtor.id}
            debtor={debtor} 
            deleteClickHandler={this.deleteDebtor.bind(this, debtor.id)}
          />
        ))}		
			</React.Fragment>
		);
	}
}

export default Debtors;
