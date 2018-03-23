import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { resetActiveView } from './App.actions';
import AppContainer from './App.container';
import NotFound from '../NotFound';
import Settings from '../Settings';
import WelcomeScreen from '../WelcomeScreen';
import AuthScreen from '../AuthScreen';
import Login from '../Account/Login';
import SignUp from '../Account/SignUp';

const AppWrapper = ({
  activeView,
  isLoginOpen,
  isSignUpOpen,
  isFirstVisit,
  resetActiveView
}) => (
  <div style={{ height: '100%' }}>
    <Route component={isFirstVisit ? WelcomeScreen : AppContainer} />
    <Switch>
      <Route path="/login-signup" component={AuthScreen} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
    {isLoginOpen && <Login onClose={resetActiveView} />}
    {isSignUpOpen && <SignUp onClose={resetActiveView} />}
  </div>
);

AppWrapper.propTypes = {
  isFirstVisit: PropTypes.bool.isRequired,
  isLoginOpen: PropTypes.bool.isRequired,
  isSignUpOpen: PropTypes.bool.isRequired,
  resetActiveView: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isFirstVisit: state.app.isFirstVisit,
  isLoginOpen: state.app.activeView === 'login',
  isSignUpOpen: state.app.activeView === 'signup'
});

const mapDispatchToProps = {
  resetActiveView
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
