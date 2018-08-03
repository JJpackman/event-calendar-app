import React from 'react';
import * as Button from '../Button/Button';
import * as Icon from '../Icon/Icon';
import styles from './Pagination.css';
import PropTypes from 'prop-types';

const Pagination = ({onNext, onPrev, content}) => (
  <div>
    <Button.Primary onPress={onPrev}>
      <Icon.Small name="arrow-left" />
    </Button.Primary>
    <span className={styles['pagination__content']}>{content}</span>
    <Button.Primary onPress={onNext}>
      <Icon.Small name="arrow-right" />
    </Button.Primary>
  </div>
);

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired
};

export default Pagination;
