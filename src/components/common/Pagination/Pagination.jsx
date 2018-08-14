import React from 'react';
import * as Button from '../../common/Button/Button';
import styles from './Pagination.css';
import PropTypes from 'prop-types';
import sprite from '../../../assets/img/sprite.svg';

const Pagination = ({onNext, onPrev, content}) => (
  <div className={styles['pagination']}>
    <Button.Primary
      onPress={onPrev}
      icon={
        <svg
          className={styles['pagination__control']}
          height="16"
          width="16"
        >
          <use xlinkHref={`${sprite}#left-arrow`}></use>
        </svg>
      }
    />
    { content && <span className={styles['pagination__content']}>{content}</span> }
    <Button.Primary
      onPress={onNext}
      icon={
        <svg
          className={styles['pagination__control']}
          height="16"
          width="16">
          <use xlinkHref={`${sprite}#right-arrow`}></use>
        </svg>
      }
    />
  </div>
);

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  content: PropTypes.node
};

export default Pagination;
