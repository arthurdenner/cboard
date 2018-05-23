import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Activate from '../Account/Activate';
import AuthScreen, { RedirectIfLogged } from '../AuthScreen';
import BoardContainer from '../Board';
import Notifications from '../Notifications';
import NotFound from '../NotFound';
import Settings from '../Settings';
import WelcomeScreen from '../WelcomeScreen';
import Login from '../Account/Login';
import SignUp from '../Account/SignUp';
import './App.css';

export class App extends Component {
  static propTypes = {
    /**
     * App language direction
     */
    dir: PropTypes.string.isRequired,
    /**
     * If 'true', user first visit
     */
    isFirstVisit: PropTypes.bool,
    /**
     * If 'true', user is logged in
     */
    isLogged: PropTypes.bool,
    /**
     * App language
     */
    lang: PropTypes.string.isRequired,
    /**
     * Resets the activeView to an empty string
     */
    resetActiveView: PropTypes.func.isRequired
  };

  render() {
    const {
      activeView,
      lang,
      dir,
      isFirstVisit,
      isLogged,
      resetActiveView
    } = this.props;

    return (
      <div className="App">
        <Helmet>
          <html lang={lang} dir={dir} />
        </Helmet>

        <Notifications />

        <Route
          component={isFirstVisit && !isLogged ? WelcomeScreen : BoardContainer}
          path="/"
        />

        <Switch>
          <RedirectIfLogged
            component={AuthScreen}
            isLogged={isLogged}
            path="/login-signup"
            to="/"
          />
          <Route path="/settings" component={Settings} />
          <Route path="/activate/:url" component={Activate} />
          <Route component={NotFound} />
        </Switch>

        {activeView === 'login' && <Login onClose={resetActiveView} />}
        {activeView === 'signup' && <SignUp onClose={resetActiveView} />}
      </div>
    );
  }
}

export default App;
