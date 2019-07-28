import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

class Card extends Component {
  static Header = CardHeader;
  static Content = CardContent;

  render () {
    const { title = null, link = null , children } = this.props;
    return (
      <div className={styles.card}>
        <CardHeader title={title} link={link} />
        <CardContent children={children} />
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Card;
