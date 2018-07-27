import React, { Component } from 'react';

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
      id
    } = this.props;

    return (
      <input
        type="text"
        id={id}
        name={name}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
}

export default TextField;
