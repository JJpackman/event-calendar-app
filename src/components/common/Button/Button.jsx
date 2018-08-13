import React from 'react';
import classnames from 'classnames';
import styles from './Button.css';
import PropTypes from 'prop-types';

const BaseButton = ({
  buttonType,
  size,
  onPress,
  icon,
  disabled,
  text,
  btnAction
}) => {
  const btnClass = classnames(
    styles.btn,
    styles[`btn--${buttonType}`],
    styles[`btn--${size}`]
  );

  return (
    <button
      className={btnClass}
      onClick={onPress}
      disabled={disabled}
      type={btnAction}
    >
      { icon && <span className={styles['btn__icon']}>{ icon }</span> }
      {
        text && <span className={styles['btn__text']}>{text}</span>
      }

    </button>
  );
};

BaseButton.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'success', 'danger']).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  btnAction: PropTypes.oneOf(['reset', 'submit', 'button']),
  text: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
};

BaseButton.defaultProps = {
  size: 'sm',
  btnAction: "button"
};

export const Primary = props => (
  <BaseButton {...props} buttonType="primary" />
);

export const Success = props => (
  <BaseButton {...props} buttonType="success" />
);

export const Danger = props => (
  <BaseButton {...props} buttonType="danger" />
);
