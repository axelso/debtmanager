import React, {Component} from "react";
import Debtor from './Debtor';
import { Consumer } from '../context';

class Debtors extends Component {
  
  deleteDebtor = id => {
    const { debtors } = this.state;
    const newDebtors = debtors.filter(debtor => debtor.id !== id);
    this.setState({
      debtors: newDebtors,
    })
  }

	render() {
    return (
      <Consumer>
        {value => {
          const { debtors } = value;
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
          )
        }}
      </Consumer>
    )


	}
}

export default Debtors;
