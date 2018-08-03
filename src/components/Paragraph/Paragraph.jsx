import React from 'react';
import classnames from 'classnames';
import styles from './Paragraph.css';
import PropTypes from 'prop-types';

const Paragraph = ({children, textAlign}) => (
  <p className={classnames(
    styles.paragraph,
    styles[`paragraph--ta-${textAlign}`]
  )}
  >
    {
      children
    }
  </p>
);

Paragraph.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.node
};

Paragraph.defaultProps = {
  textAlign: 'left'
};

export default Paragraph;
