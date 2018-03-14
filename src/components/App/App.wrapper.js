import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { resetActiveView } from './App.actions';
import AppContainer from './App.container';
import NotFound from '../NotFound';
import Settings from '../Settings';
import WelcomeScreen from '../WelcomeScreen';
import Login from '../WelcomeScreen/Login';
import SignUp from '../WelcomeScreen/SignUp';

const AppWrapper = ({
  activeView,
  isLoginOpen,
  isSignUpOpen,
  isFirstVisit,
  resetActiveView
}) => (
  <div style={{ height: '100%' }}>
    <Switch>
      <Route
        exact
        path="/"
        component={isFirstVisit ? WelcomeScreen : AppContainer}
      />
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
  isSignUpOpen: PropTypes.bool.isRequired
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
