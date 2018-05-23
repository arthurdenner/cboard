import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';

import messages from './WelcomeScreen.messages';
import { changeActiveView, finishFirstVisit } from '../App/App.actions';
import Information from './Information';
import './WelcomeScreen.css';

class WelcomeScreen extends Component {
  static propTypes = {
    changeActiveView: PropTypes.func.isRequired,
    finishFirstVisit: PropTypes.func.isRequired
  };

  render() {
    const { changeActiveView, finishFirstVisit } = this.props;

    return (
      <div className="WelcomeScreen">
        <div className="WelcomeScreen__container">
          <div className="WelcomeScreen__content">
            <Information />
          </div>
          <footer className="WelcomeScreen__footer">
            <Button
              className="WelcomeScreen__button WelcomeScreen__button--login"
              variant="raised"
              onClick={() => changeActiveView('login')}
            >
              <FormattedMessage {...messages.login} />
            </Button>
            <Button
              className="WelcomeScreen__button WelcomeScreen__button--signup"
              variant="raised"
              color="primary"
              onClick={() => changeActiveView('signup')}
            >
              <FormattedMessage {...messages.signUp} />
            </Button>
            <Button
              className="WelcomeScreen__button WelcomeScreen__button--skip"
              onClick={finishFirstVisit}
              style={{ color: '#fff', margin: '1em auto 0 auto' }}
            >
              <FormattedMessage {...messages.skipForNow} />
            </Button>
          </footer>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeActiveView,
  finishFirstVisit
};

export default connect(null, mapDispatchToProps)(WelcomeScreen);
