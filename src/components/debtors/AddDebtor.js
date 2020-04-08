import React, {Component} from "react";

class AddDebtor extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }  
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });    
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, email, phone } = this.state;    

    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Debtor
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddDebtor;
