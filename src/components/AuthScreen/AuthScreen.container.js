import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import messages from './AuthScreen.messages';
import { handleActiveView } from '../App/App.actions';
import Information from './Information';
import './AuthScreen.css';

class AuthScreen extends Component {
  static propTypes = {
    handleActiveView: PropTypes.func.isRequired
  };

  render() {
    const { handleActiveView, history } = this.props;

    return (
      <Dialog fullScreen open onClose={history.goBack}>
        <div className="AuthScreen">
          <div className="AuthScreen__container">
            <IconButton
              color="inherit"
              onClick={history.goBack}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <div className="AuthScreen__content">
              <Information />
            </div>
            <footer className="AuthScreen__footer">
              <Button
                className="AuthScreen__button AuthScreen__button--login"
                variant="raised"
                onClick={() => handleActiveView('login')}
              >
                <FormattedMessage {...messages.login} />
              </Button>
              <Button
                className="AuthScreen__button AuthScreen__button--signup"
                variant="raised"
                color="primary"
                onClick={() => handleActiveView('signup')}
              >
                <FormattedMessage {...messages.signUp} />
              </Button>
            </footer>
          </div>
        </div>
      </Dialog>
    );
  }
}

const mapDispatchToProps = {
  handleActiveView
};

export default connect(null, mapDispatchToProps)(AuthScreen);
