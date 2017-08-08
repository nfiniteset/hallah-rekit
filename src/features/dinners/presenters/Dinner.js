import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from 'react-select';

const Div = styled.div`
  margin-bottom: 32px;
`;

class Dinner extends Component {
  handleGuestSelected = (selectedOption) => {
    this.props.inviteGuest(this.props.id, selectedOption.value);
  }

  render() {
    const guestOptions = this.props.guests.map(g => ({ value: g.id, label: g.name }));

    return (
      <Div>
        <p key={this.props.startsAt}>{this.props.startsAt.toString()}</p>
        <Select options={guestOptions} onChange={this.handleGuestSelected} />
        {this.props.invitations.map(i => (
          <p key={i.guestId}>{i.guestId} {i.state}</p>
        ))}
      </Div>
    );
  }
}

Dinner.propTypes = {
  id: PropTypes.string.isRequired,
  startsAt: PropTypes.instanceOf(Date).isRequired,
  guests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  invitations: PropTypes.arrayOf(PropTypes.shape({
    guestId: PropTypes.string,
    state: PropTypes.string
  })).isRequired,
  inviteGuest: PropTypes.func.isRequired
};

module.exports = Dinner;
