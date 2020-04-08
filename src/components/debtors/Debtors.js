import React, {Component} from "react";
import Debtor from './Debtor';
import { Consumer } from '../../context';

class Debtors extends Component {
  
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
