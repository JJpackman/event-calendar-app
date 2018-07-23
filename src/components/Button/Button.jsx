import React from 'react';
import classnames from 'classnames';
import styles from './Button.css';

const TYPES = {
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
  disabled,
  content
}) => {
  const btnClass = classnames(
    styles.btn,
    styles[buttonType],
    styles[size],
    fluid && styles['btn--fluid']
  );

  const btnContent = content && <span className={styles['btn__content']}>{content}</span>;

  return (
    <button
      className={btnClass}
      onClick={onPress}
      disabled={disabled}
    >
      {
        children
      }
      {
        btnContent
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
