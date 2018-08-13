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

    this.toggleIsOpen = this.props.externalIsOpen === undefined ? this.toggleIsOpen.bind(this) : this.toggleIsOpenExternal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isOpen && !nextProps.externalIsOpen) {
      this.closePopupFromExternal();
    }
  }

  closePopupFromExternal() {
    if (this.props.externalIsOpen) {
      this.setState({
        isOpen: false
      });
    }
  }

  toggleIsOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  toggleIsOpenExternal() {
    const {
      externalIsOpen,
      externalOpenToggler
    } = this.props;

    if (!externalIsOpen) {
      this.setState(prevState => ({
        isOpen: true
      }), () => {
        externalOpenToggler();
      });
    } else if (externalIsOpen && this.state.isOpen) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }), () => {
        externalOpenToggler();
      });
    }
  }

  render() {
    const {trigger, content, position} = this.props;

    return (
      <div className={styles['popup-container']}>
        <div className={styles['popup-container__trigger']} onClick={this.toggleIsOpen}>
          {trigger}
        </div>
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
  ]),
  externalIsOpen: PropTypes.bool,
  externalOpenToggler: PropTypes.func
};

Popup.defaultProps = {
  position: 'bottom-left'
};

export default Popup;
