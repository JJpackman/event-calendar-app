import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Popup.css';

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

Popup.defaultProps = {
  position: 'bottom-left'
};

export default Popup;
