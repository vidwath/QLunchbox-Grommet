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
import { signUpModalOperation } from "../actions";
import { connect } from "react-redux";

class SignUpModal extends Component {
  constructor(props){
    super(props);
      this.state = {
        fname: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: ''
    }
  }
   signupSubmit(e) {
    debugger;
    console.log('signupSubmit')
    e.preventDefault();

    const params = {
      firstname: this.state.fname,
      email: this.state.email,
      password: this.state.password,
      passwordconfirmation: this.state.confirmPassword,
      contact: this.state.contact
    }
    console.log("params", params)
  }

  closesignUpModal(e) {
    this.props.signUpModalOperation(false);
  }

  render() {
    return (
      <Layer closer={true} overlayClose={true}>
        <Columns
          pad={{ horizontal: "medium", vertical: "medium" }}
          justify="center"
        >
          <Form onSubmit={(e) => this.signupSubmit(e)}>
            <FormFields>
              <fieldset>
                <Heading tag="h3" margin="none" strong={true} align="center">
                  Sign up
                </Heading>
                <FormField label="Name">
                  <TextInput id="signUpName" name="fname" value={this.state.fname} required/>
                </FormField>
                <FormField label="Email">
                  <TextInput id="signUpEmail" name="email" value={this.state.email} required/>
                </FormField>
                <FormField>
                  <PasswordInput placeholder="Password" name="password" value={this.state.password} required />
                </FormField>
                <FormField>
                  <PasswordInput placeholder="Confirm Password" name="confirmPassword" value={this.state.cpassword} required />
                </FormField>
                <FormField label="Contact Number">
                  <TextInput id="signUpMobile" name="contact" value={this.state.contact} required />
                </FormField>
                <FormField>
                  <CheckBox
                    id="agree"
                    name="agree"
                    label="I agree to terms & conditions"
                  />
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button
                label="Sign Up"
                href="#"
                primary={true}
              />
            </Footer>
          </Form>
        </Columns>
      </Layer>
    );
  }
}

const mapStateToProps = state => {
  const { showSignUpModal } = state.signup;
  return { showSignUpModal };
};

export default connect(mapStateToProps, { signUpModalOperation })(SignUpModal);