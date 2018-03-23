import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';

import messages from './WelcomeScreen.messages';
import { finishFirstVisit, handleActiveView } from '../App/App.actions';
import Information from './Information';
import './WelcomeScreen.css';

class WelcomeScreen extends Component {
  static propTypes = {
    finishFirstVisit: PropTypes.func.isRequired
  };

  render() {
    const { finishFirstVisit, handleActiveView } = this.props;

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
              onClick={() => handleActiveView('login')}
            >
              <FormattedMessage {...messages.login} />
            </Button>
            <Button
              className="WelcomeScreen__button WelcomeScreen__button--signup"
              variant="raised"
              color="primary"
              onClick={() => handleActiveView('signup')}
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
  finishFirstVisit,
  handleActiveView
};

export default connect(null, mapDispatchToProps)(WelcomeScreen);
