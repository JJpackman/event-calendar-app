import React from 'react';
import * as Button from '../../common/Button/Button';
import styles from './Pagination.css';
import PropTypes from 'prop-types';
import leftArrowIcon from '../../../assets/img/left-arrow.svg';
import rightArrowIcon from '../../../assets/img/right-arrow.svg';

const Pagination = ({onNext, onPrev, content}) => (
  <div className={styles['pagination']}>
    <Button.Primary
      onPress={onPrev}
      icon={
        <img
          className={styles['pagination__control-icon']}
          src={leftArrowIcon}
          alt="Next"
          width="16"
          height="16"
        />
      }
    />
    { content && <span className={styles['pagination__content']}>{content}</span> }
    <Button.Primary
      onPress={onNext}
      icon={
        <img
          src={rightArrowIcon}
          alt="Previous"
          width="16"
          height="16"
        />
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
