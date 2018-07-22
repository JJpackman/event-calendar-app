import React from 'react';
import styles from './Container.css';

const Container = ({ fluid, children }) => (
  <div
    className={styles[fluid ? 'container-fluid' : 'container']}
  >
    {
      children
    }
  </div>
);

export default Container;
