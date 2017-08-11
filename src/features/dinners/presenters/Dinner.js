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
    const invitedGuestIds = this.props.invitations.map(i => i.guestId);
    const guestOptions = this.props.guests
      .filter(g => !invitedGuestIds.includes(g.id))
      .map(g => ({ value: g.id, label: g.name }));

    return (
      <Div>
        <p key={this.props.startsAt}>{this.props.startsAt.toString()}</p>
        <Select options={guestOptions} onChange={this.handleGuestSelected} />
        {this.props.children}
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
  inviteGuest: PropTypes.func.isRequired,
  children: PropTypes.node
};

Dinner.defaultProps = {
  children: null
};

module.exports = Dinner;
