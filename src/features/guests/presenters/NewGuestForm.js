import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewGuestForm extends Component {
  static propTypes = {
    transientGuest: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onInput: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.props.onInput(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.transientGuest);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.props.transientGuest.name} onInput={this.handleInput} />
      </form>
    );
  }
}


export default NewGuestForm;
