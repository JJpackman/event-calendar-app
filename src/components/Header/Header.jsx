import React from 'react';
import styles from './Header.css';
import classnames from 'classnames';
import Container from '../Container/Container';

const Header = ({children}) => {
  return (
    <header className={classnames(
      styles.header,
      styles['header--light']
    )}>
      <Container>
        {
          children
        }
      </Container>
    </header>
  );
};

export default Header;
