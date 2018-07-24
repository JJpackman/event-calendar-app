import React from 'react';
import * as Button from '../Button/Button';
import * as Icon from '../Icon/Icon';
import styles from './Pagination.css';

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

export default Pagination;
