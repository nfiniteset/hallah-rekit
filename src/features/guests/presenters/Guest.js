import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Guest extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    dietaryRestrictions: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.dietaryRestrictions}</p>
      </div>
    );
  }
}

export default Guest;
