import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from '../UI/IconButton';
import messages from './AuthScreen.messages';
import Information from './Information';
import './AuthScreen.css';

class AuthScreen extends Component {
  render() {
    const { history } = this.props;

    return (
      <Dialog fullScreen open onClose={history.goBack}>
        <div className="AuthScreen">
          <div className="AuthScreen__container">
            <IconButton label="Close" onClick={history.goBack}>
              <CloseIcon />
            </IconButton>

            <div className="AuthScreen__content">
              <Information />
            </div>

            <footer className="AuthScreen__footer">
              <Button
                className="AuthScreen__button AuthScreen__button--login"
                variant="raised"
                onClick={() => this.handleActiveView('login')}
              >
                <FormattedMessage {...messages.login} />
              </Button>
              <Button
                className="AuthScreen__button AuthScreen__button--signup"
                variant="raised"
                color="primary"
                onClick={() => this.handleActiveView('signup')}
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

export default AuthScreen;
