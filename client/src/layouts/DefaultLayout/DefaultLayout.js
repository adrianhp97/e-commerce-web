import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import styles from './DefaultLayout.module.css';

import Header from '../../components/Header/Header';

import { Container } from 'semantic-ui-react';

class DefaultLayout extends Component {
  render () {
    const { children } = this.props;
    let title = 'dress mini';

    return (
      <Fragment>
        <Header title={title} />
        <Container id={styles.bodyContent}>
          {children}
        </Container>
      </Fragment>
    );
  }
}

export const mapStateToProps = () => {
  return {};
};

export const mapDispatcherToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatcherToProps)(DefaultLayout);