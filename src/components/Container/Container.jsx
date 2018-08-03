import React from 'react';
import styles from './Container.css';
import PropTypes from 'prop-types';

const Container = ({ fluid, children }) => (
  <div
    className={styles[fluid ? 'container-fluid' : 'container']}
  >
    {
      children
    }
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
};

Container.defaultProps = {
  fluid: false
};

export default Container;
