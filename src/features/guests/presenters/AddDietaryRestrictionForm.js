import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

class AddDietaryRestrctionForm extends Component {
  static propTypes = {
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    transientDietaryRestriction: PropTypes.string.isRequired
  };

  handleInput = (event) => {
    this.props.onInput(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit();
  };

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <Label htmlFor="add-dietary-restriction">
          Dietary restricitons
      </Label>
      <input
        id="add-dietary-restriction"
        onSubmit={this.handleSubmit}
        onInput={this.handleInput}
        value={this.props.transientDietaryRestriction}
        placeholder="Add a dietary restriction"
      />
    </form>);
  }
}

export default AddDietaryRestrctionForm;
