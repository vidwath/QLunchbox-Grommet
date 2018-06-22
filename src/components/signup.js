import React, { Component } from "react";
import Layer from "grommet/components/Layer";
import LoginForm from "grommet/components/LoginForm";
import Title from "grommet/components/Title";
import Toast from "grommet/components/Toast";
import Columns from "grommet/components/Columns";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import { Redirect } from "react-router-dom";
import FormCheckmark from "grommet/components/icons/base/FormCheckmark";
import Heading from "grommet/components/Heading";
import TextInput from "grommet/components/TextInput";
import PasswordInput from "grommet/components/PasswordInput";
import DateTime from "grommet/components/DateTime";
import CheckBox from "grommet/components/CheckBox";
import NumberInput from "grommet/components/NumberInput";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";
import { signUpModalOperation, signupToApp } from "../actions";
import { connect } from "react-redux";

class SignUpModal extends Component {
  onFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                () => { this.validateField(name, value) });
  }
  onClick(e){
    if(e.target.checked === true){
      this.setState({isChecked: true})
    }else{
      this.setState({isChecked: false})
    }
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let fNameValid = this.state.fNameValid;  
    let lNameValid = this.state.lNameValid;  
    let contactValid = this.state.contactValid;  
    let passwordValid = this.state.passwordValid;  
    let emailValid = this.state.emailValid;
    switch(fieldName) {
      case 'fname':
        fNameValid = value.length >= 4;
        fieldValidationErrors.fname = fNameValid ? '': ' is too short';
        break;
        case 'lname':
        lNameValid = value.length >= 4;
        fieldValidationErrors.lname = lNameValid ? '': ' is too short';
        break;
        case 'contact':
        contactValid = value.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/);
        fieldValidationErrors.contact = contactValid ? '': ' is not correct';
        break;
        case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '': 'Invalid email address';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    fNameValid, lNameValid, contactValid, passwordValid, emailValid, isChecked
                  },this.validateForm);
  }
   validateForm() {
    this.setState({formValid: this.state.fNameValid && this.state.lNameValid && this.state.passwordValid && this.state.emailValid && this.state.isChecked});
  }
  constructor(props){
    super(props);
      this.state = {
        fname: '',
        email: '',
        password: '',
        contact: '',
        formErrors: {},
        fNameValid: '',
        lNameValid: '',
        passwordValid: '',
        emailValid: '',
        isChecked: false
    }
    this.onClick = this.onClick.bind(this);
  }
  // signup (username, password) {
  //   this.props.signUpToApp()
  // }
   signupSubmit(e) {
    e.preventDefault();
    console.log('signupSubmit')

    const params = {
      first_name: this.state.fname,
      last_name: this.state.lname,
      password: this.state.password,
      email: this.state.email,
      account_status: true,
      auth_token: "1234"
    }
    console.log("params", params)
    this.props.signupToApp(params)
  }

  closeSignUpModal(e) {
    this.props.signUpModalOperation(false);
  }

  render() {
    return (
      <Layer closer={true} overlayClose={true} onClose={(e)=>{this.closeSignUpModal(e)}}>
          <Form onSubmit={(e) => this.signupSubmit(e)}>
            <FormFields>
              <fieldset>
                <Heading tag="h3" margin="none" strong={true} align="center">
                  Sign up
                </Heading>
                <FormField label="Name" error={this.state.formErrors['fname']}>
                  <TextInput id="firstName" name="fname" onDOMChange={(e) => this.onFieldChange(e)} onKeyUp={(e) => this.handleUserInput(e)}  value={this.state.fname} required/>
                </FormField>
                <FormField label="Last Name" error={this.state.formErrors['lname']}>
                  <TextInput id="lastName" name="lname" onDOMChange={(e) => this.onFieldChange(e)} onKeyUp={(e) => this.handleUserInput(e)}  value={this.state.lname} required/>
                </FormField>
                <FormField label="Contact Number" error={this.state.formErrors['contact']}>
                  <TextInput placeHolder="111-111-1111" id="signUpMobile" name="contact" onDOMChange={(e) => this.onFieldChange(e)} onKeyUp={(e) => this.handleUserInput(e)} value={this.state.contact} required />
                </FormField>
                <FormField label="Password" error={this.state.formErrors['password']}>
                  <PasswordInput placeholder="Password" name="password" onChange={(e) => this.onFieldChange(e)} value={this.state.password} onKeyUp={(e) => this.handleUserInput(e)} required />
                </FormField>
                <FormField label="Email" error={this.state.formErrors['email']}>
                  <TextInput id="signUpEmail" name="email" onDOMChange={(e) => this.onFieldChange(e)} onKeyUp={(e) => this.handleUserInput(e)} value={this.state.email} required/>
                </FormField>
                <FormField>
                  <CheckBox
                    id="agree"
                    name="agree"
                    label="I agree to terms & conditions"
                    onClick={this.onClick} 
                    checked={this.state.checked}
                  />
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button
                label="Sign Up"
                type="submit"
                primary={true}
              />
            </Footer>
          </Form>
      </Layer>
    );
  }
}

const mapStateToProps = state => {
  const { showSignUpModal } = state.signup;
  return { showSignUpModal };
};

export default connect(mapStateToProps, { signUpModalOperation, signupToApp })(SignUpModal);