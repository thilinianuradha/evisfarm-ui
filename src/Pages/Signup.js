import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FormValidator from './FormValidator';
import './Signup.css';

class Signup extends Component{
  constructor(){
  super();
  this.validator = new FormValidator([{
    field: 'full_name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter full name.'
    }, {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter your email address.'
    }, {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'Enter valid email address.'
    }, {
    field: 'phone',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter a phone number.'
    }, {
    field: 'phone',
    method: 'matches',
    args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
    validWhen: true,
    message: 'Enter valid phone number.'
    }, {
    field: 'password',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter password.'
    }, {
    field: 'password_confirmation',
    method: 'isEmpty',
    validWhen: false,
    message: 'Enter Password confirmation.'
    }, {
    field: 'password_confirmation',
    method: this.passwordMatch, // notice that we are passing a custom function here
    validWhen: true,
    message: 'Password and password confirmation do not match.'
    }]);
this.state = {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
      }
    this.submitted = false;
            }
    passwordMatch = (confirmation, state) => (state.password === confirmation)
    handleInputChange = event => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
    
    handleFormSubmit = event => {
      event.preventDefault();
      const validation = this.validator.validate(this.state);
      this.setState({
        validation
      });

    this.submitted = true;
    if(validation.isValid) {
//reaches here if form validates successfully...
      }
}

render() {
  let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
    return (
      <div className="sign">
        <div className="row">
          <div className="col-md-5 col-md-offset-4">
            <form className="registrationForm">
              <h2>Registration </h2>
              <br/>
              <div className={validation.email.isInvalid && 'has-error'}>
              <label htmlFor="full_name">Full Name</label> 
              <input type="string" className="form-control" name="full_name" placeholder="Full Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div><br/>
              <div className={validation.email.isInvalid && 'has-error'}>
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div><br/>
              <div className={validation.phone.isInvalid && 'has-error'}>
              <label htmlFor="phone">Phone(enter only 10 digit number)</label>
              <input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div><br/>
              <div className={validation.password.isInvalid && 'has-error'}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div><br/>
              <div className={validation.password_confirmation.isInvalid && 'has-error'}>
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={this.handleInputChange} /> <span className="help-block">{validation.password_confirmation.message}</span> </div> <br/>
              <button onClick={this.handleFormSubmit} className="btn btn-primary"> Sign In </button>
            </form>
            </div>
          <div className="row">
          <p classname="mt-5" style={{textAlignVertical: "center",textAlign: "center",}}>Already have an Account?<span><Link to="/Login"> Login </Link></span></p>
          <h5 style={{textAlignVertical: "center",textAlign: "center",}}>By signing up you agree to our Terms of Use</h5>
        </div>
        </div>
    </div>
)
}
}
export default Signup;