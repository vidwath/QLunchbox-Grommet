import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
import Title from 'grommet/components/Title';
import Toast from 'grommet/components/Toast';
import { Redirect } from 'react-router-dom'
// import FormFields from 'grommet/components/FormFields';
// import Header from 'grommet/components/Header';
// import Heading from 'grommet/components/Heading';
// import Footer from 'grommet/components/Footer';
// import Button from 'grommet/components/Button';
import { loginModalOperation, loginToApp } from '../actions';
import { connect } from 'react-redux';

class LoginModal extends Component {

  login (username, password) {
    this.props.loginToApp(username, password)
  }
  
  closeLoginModal (e) {
    this.props.loginModalOperation(false);
  };

  render() {
    
    return (
      <Layer 
        closer={true}
        flush={false}
        overlayClose={true} 
        onClose={(e)=>{this.closeLoginModal(e)}}>
        { this.props.loginInvalid ? 
          <Toast status='critical'>
            Invalid Email or Password
          </Toast> 
        : 
          null 
        }
        <LoginForm 
        title='Login'
        rememberMe={false} 
        onSubmit={(username, password) => this.login(username, password)}/>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal} = state.login;
  return { showLoginModal};
}

export default connect(mapStateToProps, { loginModalOperation, loginToApp }) (LoginModal);