import React, { Component } from 'react';
import styles from './TextField.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
    const {onChange} = this.props;
    onChange && onChange(e);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const {onEnter} = this.props;
      onEnter && onEnter(e);
      this.reset();
    }
  }

  reset() {
    this.setState({text: ''})
  }

  render() {
    const {
      placeholder,
      disabled,
      name,
      id,
      required
    } = this.props;

    return (
      <input
        className={classnames(
          styles.textfield
        )}
        type="text"
        id={id}
        name={name}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
      />
    );
  }
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func
};

TextField.defaultProps = {
  required: false,
  disabled: false
};

export default TextField;
