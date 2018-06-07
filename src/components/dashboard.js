import React, { Component, PropTypes } from "react";
import Actions from "grommet/components/icons/base/Actions";
import Login from "grommet/components/icons/base/Login";
import Anchor from "grommet/components/Anchor";
import Article from "grommet/components/Article";
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import Carousel from "grommet/components/Carousel";
import CheckBox from "grommet/components/CheckBox";
import Columns from "grommet/components/Columns";
import Form from "grommet/components/Form";
import FormFields from "grommet/components/FormFields";
import FormField from "grommet/components/FormField";
import Footer from "grommet/components/Footer";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Image from "grommet/components/Image";
import Label from "grommet/components/Label";
import Layer from "grommet/components/Layer";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import LoginForm from "grommet/components/LoginForm";
import Menu from "grommet/components/Menu";
import Notification from "grommet/components/Notification";
import Paragraph from "grommet/components/Paragraph";
import PasswordInput from "grommet/components/PasswordInput";
import Search from "grommet/components/Search";
import Section from "grommet/components/Section";
import TextInput from "grommet/components/TextInput";
import Title from "grommet/components/Title";
import Value from "grommet/components/Value";
import Meter from "grommet/components/Meter";
import Spinning from "grommet/components/icons/Spinning";
import HeaderBeforeLogin from "./commons/headerBeforeLogin"
// // import API_END_POINT from "../../../server/api";
// import fetch from "isomorphic-fetch";
// // import NavControl from '../components/NavControl';
// // import { loadDashboard, unloadDashboard } from "../actions/dashboard";

// // import { pageLoaded } from "./utils";

const itemsList = [
  {
    id: "1",
    name: "Full Meals"
  },
  {
    id: "2",
    name: "Chapathi"
  },
  {
    id: "3",
    name: "Parota"
  },
  {
    id: "4",
    name: "Parota"
  },
  {
    id: "5",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "5",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  }
];

class Dashboard extends Component {
  constructor() {
    super();
    // this._signInActivate = this._signInActivate.bind(this); 
    // this._signUpActivate = this._signUpActivate.bind(this); 
    this._onClose = this._onClose.bind(this);
    this._onCloseSignUp = this._onCloseSignUp.bind(this);
    this.state = { signinactive: undefined }; //initial state is undefined, so the layer is not open
  }
  //activation function
  // _signInActivate() {
  //   console.log("layer active");
  //   this.setState({ signinactive: true });
  // }

  // _signUpActivate() {
  //   console.log("signup layer active");
  //   this.setState({ signupactive: true });
  // }

  _onClose() {
    console.log("layer inactive");
    this.setState({ signinactive: false });
  }

  _onCloseSignUp() {
    console.log("signup layer inactive");
    this.setState({ signupactive: false });
  }

  // _onLogin(fields) {
  //   fetch("https://vbuvy8obl9.execute-api.us-west-2.amazonaws.com/dev/api/v1", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: fields.username,
  //       password: fields.password
  //     })
  //   }).then(response => {
  //     console.log("response", response);
  //   });
  //   // no-op
  //   alert(
  //     `Username: ${fields.username}, Password: ${fields.password},` +
  //       ` rememberMe: ${fields.rememberMe}`
  //   );
  // }

  _onLogin(fields) {
    const user = {
      email: fields.username,
      password: fields.password
    };
    fetch("https://vbuvy8obl9.execute-api.us-west-2.amazonaws.com/dev/api/v1/session/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          // bake_cookie("auth_token", response.headers.get("x-auth-token"));
        }
        return response.json();
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          // bake_cookie("user_data", response.user);
          // this.setState({
          //   loginResponseMessage: response.message
          // });
          // this.props.signInRef();
          // if (response.user.user_role === "admin"){
          //   hashHistory.push("/admin/itemList");
          // } else {
          //   this.props.onLoginReloadItemList();
          // }
        } else if (response.status === 422) {
          this.setState({
            passwordError: response.error
          });
        }
      });
  }

  render() {
    const { error, tasks } = this.props;
    const { intl } = this.context;
    const displayFoodItems = itemsList.map(singleItem => (
      <Box
        align="center"
        pad="medium"
        margin="small"
        colorIndex="light-2"
        basis="1/4"
      >
        <Image
          src="./food-item-1.jpg"
          caption={singleItem.name}
          size="medium"
          full={false}
        />
        <Heading tag="h5">{singleItem.id}</Heading>
        <Heading tag="h5">Price: &#8377;120</Heading>
        <Heading tag="h5">Paradise Hotel</Heading>
      </Box>
    ));

    let signInLayer = null;
    if (this.state.signinactive) {
      signInLayer = (
        <Layer
          closer={true}
          overlayClose={true}
          onClose={this._onClose}
          align="top"
        >
          <LoginForm
            title="Sign in"
            forgotPassword={<Anchor href="#" label="Forgot password?" />}
            rememberMe={true}
            onSubmit={this._onLogin}
          />
        </Layer>
      );
    }

    let signUpLayer = null;
    if (this.state.signupactive) {
      signUpLayer = (
        <Layer
          closer={true}
          overlayClose={true}
          onClose={this._onCloseSignUp}
          align="top"
        >
          <Form pad={{ horizontal: "large" }}>
            <FormFields>
              <fieldset>
                <Heading tag="h3" margin="none" strong={true}>
                  Sign up
                </Heading>
                <FormField label="Name">
                  <TextInput id="signUpName" name="sign-up-name" />
                </FormField>
                <FormField label="Email">
                  <TextInput id="signUpEmail" name="sign-up-email" />
                </FormField>
                <FormField>
                  <PasswordInput />
                </FormField>
                <FormField>
                  <PasswordInput />
                </FormField>
                <FormField label="Phone">
                  <TextInput id="signUpMobile" name="sign-up-mobile" />
                </FormField>
                <FormField>
                  <CheckBox
                    id="agree"
                    name="agree"
                    label="I agree to terms & conditions"
                  />
                </FormField>
              </fieldset>
              <t />
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button label="Sign up" type="submit" primary={true} />
            </Footer>
          </Form>
        </Layer>
      );
    }

    return (
      <Article primary={true}>
        <HeaderBeforeLogin/>
        <Hero
          background={<Image src="./splash.jpg" fit="cover" full={true} />}
          backgroundColorIndex="dark"
        >
          <Box direction="row" justify="center" align="center">
            <Box basis="1/2" align="end" pad="medium" />
            <Box basis="1/2" align="start" pad="medium">
              <Heading margin="none">Delivery to your Desk</Heading>
            </Box>
          </Box>
        </Hero>
        <Columns margin="small">
          <Box direction="row" full="horizontal" wrap={true}>
            {displayFoodItems}
          </Box>
        </Columns>        
        {signUpLayer}
        {signInLayer}
      </Article>
    );
  }
}




export default Dashboard;