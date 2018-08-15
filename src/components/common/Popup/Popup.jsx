import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Popup.css';
import PropTypes from 'prop-types';

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.popupContainer = React.createRef();
    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  toggleIsOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.popupContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const {trigger, content, position} = this.props;

    return (
      <div
        className={styles['popup-container']}
        ref={this.popupContainer}
      >
        <div
          className={styles['popup-container__trigger']}
          onClick={this.toggleIsOpen}
        >
          {trigger}
        </div>
        {
          this.state.isOpen &&
          <div
            className={classnames(
              styles['popup-container__popup'],
              styles[`popup-container__popup--${position}`]
            )}
          >
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
  ]),
  externalIsOpen: PropTypes.bool,
  externalOpenToggler: PropTypes.func
};

Popup.defaultProps = {
  position: 'bottom-left'
};

export default Popup;
