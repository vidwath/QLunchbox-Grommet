import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
import Title from 'grommet/components/Title';
import Toast from 'grommet/components/Toast';
import { Redirect, HashRouter } from 'react-router-dom';
import { loginModalOperation, loginToApp } from '../actions';
import { connect } from 'react-redux';

class LoginModal extends Component {

  constructor(props) {
    super(props); 
  }

  login (username, password) {
    this.props.loginToApp(username, password)
  }
  
  closeLoginModal (e) {
    this.props.loginModalOperation(false);
  };

  render() {
    debugger
    return (
        <Layer 
          closer={true}
          flush={false}
          overlayClose={true} 
          onClose={(e)=>{this.closeLoginModal(e)}}>
          <LoginForm 
          title='Login'
          rememberMe={false}
          errors={this.props.loginInvalid ? [this.props.loginInvalid.data]: []}
          onSubmit={(username, password) => this.login(username, password)}/>
        </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  const { showLoginModal, loginInvalid} = state.login;
  return { showLoginModal, loginInvalid};
}

export default connect(mapStateToProps, { loginModalOperation, loginToApp }) (LoginModal);