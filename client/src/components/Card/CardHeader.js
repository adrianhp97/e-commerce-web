import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardHeader.module.css';

import { isNil } from '../../utils/propertyUtils';

const CardHeader = ({ title, link }) => {
  let { to = null, text = null } = link;
  return (
    <div className={styles.cardHeader}>
      <h1 className={styles.title}>{title}</h1>
      {!isNil(to) && !isNil(text) && <Link to={to} className={styles.link}>{text}</Link>}
    </div>
  );
}

export default CardHeader;
