//import styles
import 'grommet/scss/vanilla/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
import Dashboard from './components/dashboard';
import Home from './components/home';
import HeaderBeforeLogin from './components/commons/HeaderBeforeLogin';
import reducers from './reducers';
import { connect } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Main extends Component {
  render() {
    return (
      <App centered={false}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/home"  component={Home} />
          </Switch>
        </BrowserRouter>
        </Provider>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
