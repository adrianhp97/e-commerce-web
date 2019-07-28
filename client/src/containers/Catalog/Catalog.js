import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Catalog extends Component {
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

Catalog.propTypes = {
  children: PropTypes.element,
};

export const mapStateToProps = () => {
  return {};
};

export const mapDispatcherToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatcherToProps)(Catalog);