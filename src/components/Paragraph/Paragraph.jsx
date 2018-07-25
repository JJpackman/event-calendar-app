import React from 'react';
import classnames from 'classnames';
import styles from './Paragraph.css';

export const TEXT_ALIGN = {
  left: 'paragraph--ta-left',
  right: 'paragraph--ta-right',
  center: 'paragraph--ta-center'
};

const Paragraph = ({children, textAlign}) => (
  <p className={classnames(
    styles.paragraph,
    styles[textAlign]
  )}
  >
    {
      children
    }
  </p>
);

Paragraph.defaultProps = {
  textAlign: TEXT_ALIGN.left
};

export default Paragraph;
