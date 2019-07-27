import React, { Component, Fragment } from 'react';

import styles from './DefaultLayout.module.css';

import Header from '../../components/Header/Header';

import { Container } from 'semantic-ui-react';

class DefaultLayout extends Component {
  render () {
    console.log(styles);
    const { children } = this.props;

    return (
      <Fragment>
        <Header title={"dress mini"} />
        <Container id={styles.bodyContent}>
          {children}
        </Container>
      </Fragment>
    );
  }
}

export default DefaultLayout;
