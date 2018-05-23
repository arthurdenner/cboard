import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';

import registerServiceWorker from '../../registerServiceWorker';
import { showNotification } from '../Notifications/Notifications.actions';
import { resetActiveView } from './App.actions';
import { isFirstVisit, isLogged } from './App.selectors';
import messages from './App.messages';
import App from './App.component';

export class AppContainer extends Component {
  static propTypes = {
    /**
     * Contains the current view (login or signup)
     */
    activeView: PropTypes.string.isRequired,
    /**
     * App language direction
     */
    dir: PropTypes.string.isRequired,
    /**
     * @ignore
     */
    intl: intlShape.isRequired,
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
    lang: PropTypes.string.isRequired
  };

  componentDidMount() {
    registerServiceWorker(
      this.handleNewContentAvailable,
      this.handleContentCached
    );
  }

  handleNewContentAvailable = () => {
    const { intl } = this.props;
    showNotification(intl.formatMessage(messages.newContentAvailable));
  };

  handleContentCached = () => {
    const { intl } = this.props;
    showNotification(intl.formatMessage(messages.contentIsCached));
  };

  render() {
    const {
      activeView,
      dir,
      isFirstVisit,
      isLogged,
      lang,
      resetActiveView
    } = this.props;

    return (
      <App
        activeView={activeView}
        dir={dir}
        isFirstVisit={isFirstVisit}
        isLogged={isLogged}
        lang={lang}
        resetActiveView={resetActiveView}
      />
    );
  }
}

const mapStateToProps = state => ({
  activeView: state.app.activeView,
  dir: state.language.dir,
  isFirstVisit: isFirstVisit(state),
  isLogged: isLogged(state),
  lang: state.language.lang
});

const mapDispatchToProps = {
  resetActiveView,
  showNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(
  injectIntl(AppContainer)
);
