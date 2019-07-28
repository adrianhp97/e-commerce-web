import React, { Component } from 'react';

import styles from './Card.module.css';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

class Card extends Component {
  static Header = CardHeader;

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
export default Card;
