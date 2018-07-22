import React from 'react';
import classnames from 'classnames';
import styles from './Button.css';

export const TYPES = {
  primary: 'btn--primary',
  success: 'btn--success',
  danger: 'btn--danger'
};

export const SIZES = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg'
};

const BaseButton = ({
  buttonType,
  fluid,
  size,
  onPress,
  children,
  disabled
}) => {
  const btnClass = classnames(
    styles.btn,
    styles[buttonType],
    styles[size],
    fluid && styles['btn--fluid']
  );

  return (
    <button
      className={btnClass}
      onClick={onPress}
      disabled={disabled}
    >
      {
        children
      }
    </button>
  );
};

BaseButton.defaultProps = {
  size: SIZES.sm
};

export const Primary = props => (
  <BaseButton {...props} buttonType={TYPES.primary} />
);

export const Success = props => (
  <BaseButton {...props} buttonType={TYPES.success} />
);

export const Danger = props => (
  <BaseButton {...props} buttonType={TYPES.danger} />
);
