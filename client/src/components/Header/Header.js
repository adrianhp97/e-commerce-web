import React, { Component } from 'react';

import styles from './Header.module.css';

import { 
  Header as HeaderText,
  Icon,
  Sticky,
} from 'semantic-ui-react';

class Header extends Component {
  render () {
    const { title } = this.props;
    return (
      <Sticky className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <div className={styles.backIcon}>
            <Icon name='arrow left' size='big' />
          </div>
          <div className={styles.titleWrapper}>
            <HeaderText as='h1' className={styles.title}>{title}</HeaderText>
          </div>
          <div className={styles.navigation}>
            <Icon name='search' size='big' />
          </div>
        </div>
      </Sticky>
    );
  }
}

export default Header;
