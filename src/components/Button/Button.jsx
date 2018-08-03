import React from 'react';
import classnames from 'classnames';
import styles from './Button.css';
import PropTypes from 'prop-types';

const BaseButton = ({
  buttonType,
  fluid,
  size,
  onPress,
  children,
  disabled,
  content,
  btnAction
}) => {
  const btnClass = classnames(
    styles.btn,
    styles[`btn--${buttonType}`],
    styles[`btn--${size}`],
    fluid && styles['btn--fluid']
  );

  const btnContent = content && <span className={styles['btn__content']}>{content}</span>;

  return (
    <button
      className={btnClass}
      onClick={onPress}
      disabled={disabled}
      type={btnAction}
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

BaseButton.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'success', 'danger']).isRequired,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  btnAction: PropTypes.oneOf(['reset', 'submit', 'button']),
  content: PropTypes.string,
  children: PropTypes.node,
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
