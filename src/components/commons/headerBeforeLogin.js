import React, { Component } from "react";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Login from "grommet/components/icons/base/Login";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
import { connect } from 'react-redux';
import { loginModalOperation } from '../../actions'
import { signUpModalOperation } from '../../actions'
import LoginModal from '../login';
import SignUpModal from '../signup';


class HeaderLogin extends Component {
	getLoginModal(e) {
		console.log('this.props', this.props);
		this.props.loginModalOperation(true);
	}
	getSignUpModal(e) {
		this.props.signUpModalOperation(true);
	}

	// _signUpActivate() {
	// 	console.log("signup layer active");
	// 	this.setState({ signupactive: true });
	// }
	render() {
		console.log("this.props.showSignUpModal - ", this.props.showSignUpModal)
		console.log("this.props.showLoginModal - ", this.props.showLoginModal)
		return (
			<Header
				size="large"
				pad={{ horizontal: "medium", vertical: "medium" }}
			>
				<Title>Q Lunch Box</Title>
				<Box
					flex={true}
					justify="end"
					direction="row"
					responsive={false}
				>
					<Menu icon={<Login />} dropAlign={{ right: "right" }}>
						<Anchor href="#" onClick={e => this.getLoginModal(e)}>
							Sign in
						</Anchor>
						<Anchor href="#" onClick={e => this.getSignUpModal(e)}>
							Sign up
						</Anchor>
					</Menu>
				</Box>
				{this.props.showLoginModal ? <LoginModal /> : null}
				{this.props.showSignUpModal ? <SignUpModal /> : null}
			</Header>
		);
	}
}

const mapStateToProps = (state) => {
  const { showLoginModal } = state.login;
  const { showSignUpModal } = state.signup;
  console.log("showSignUpModal - ", showSignUpModal)
  return { showLoginModal, showSignUpModal};
}

export default connect(mapStateToProps, { loginModalOperation, signUpModalOperation }) (HeaderLogin);
