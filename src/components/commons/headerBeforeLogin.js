import React, { Component } from "react";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Login from "grommet/components/icons/base/Login";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
import { connect } from 'react-redux';
import { loginModalOperation } from '../../actions'
import LoginModal from '../login';


class HeaderLogin extends Component {
	getLoginModal(e) {
		this.props.loginModalOperation(true);
	}

	_signUpActivate() {
		console.log("signup layer active");
		this.setState({ signupactive: true });
	}
	render() {
		console.log("props", this.props.showLoginModal)
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
						<Anchor href="#" onClick={() => this._signUpActivate()}>
							Sign up
						</Anchor>
					</Menu>
				</Box>
				{this.props.showLoginModal ? <LoginModal /> : null}
			</Header>
		);
	}
}

const mapStateToProps = (state) => {
  const { showLoginModal } = state.login;
  return { showLoginModal };
}

export default connect(mapStateToProps, { loginModalOperation }) (HeaderLogin);
