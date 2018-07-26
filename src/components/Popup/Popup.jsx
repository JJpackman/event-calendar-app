import React, { Component } from 'react';
// import classnames from 'classnames';
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
    const {trigger, content} = this.props;

    return (
      <div className={styles['popup-container']}>
        <span onClick={this.toggleIsOpen}>
          {trigger}
        </span>
        {
          this.state.isOpen &&
          <div className={styles['popup-container__popup']}>
            {content}
          </div>
        }
      </div>
    );
  }
}

export default Popup;
