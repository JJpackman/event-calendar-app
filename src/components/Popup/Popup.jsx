import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Popup.css';
import PropTypes from 'prop-types';

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
  }

  toggleIsOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {trigger, content, position} = this.props;

    return (
      <div className={styles['popup-container']}>
        <span onClick={this.toggleIsOpen}>
          {trigger}
        </span>
        {
          this.state.isOpen &&
          <div className={classnames(
            styles['popup-container__popup'],
            styles[`popup-container__popup--${position}`]
          )}>
            {content}
          </div>
        }
      </div>
    );
  }
}

Popup.propTypes = {
  trigger: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    'bottom-left',
    'bottom-right',
    'right-bottom',
    'right-top',
    'left-bottom',
    'left-top',
    'top-right',
    'top-left'
  ])
};

Popup.defaultProps = {
  position: 'bottom-left'
};

export default Popup;
