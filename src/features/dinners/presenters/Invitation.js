import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Guest from '../../guests/presenters/Guest';

const Div = styled.div`
  margin-bottom: 20px;
`;

const stateOptions = [
  { label: 'Invited', value: 'INVITED' },
  { label: 'Accepted', value: 'ACCEPTED' },
  { label: 'Tentative', value: 'TENTATIVE' },
  { label: 'Declined', value: 'DECLINED' },
  { label: 'Confirmed', value: 'CONFIRMED' },
  { label: 'Canceled', value: 'CANCELED' },
  { label: 'Showed', value: 'SHOWED' },
  { label: 'No-showed', value: 'NO-SHOWED' },
];

class Invitation extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    guest: PropTypes.object,
    state: PropTypes.string.isRequired,
    onStateChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    guest: null
  }

  handleSelection = (event) => {
    this.props.onStateChange({ id: this.props.id, state: event.target.value });
  }

  render() {
    return (
      <Div>
        {this.props.guest ? <Guest {...this.props.guest} /> : null}
        <select value={this.props.state} onChange={this.handleSelection}>
          {stateOptions.map(o => <option key={o.value} {...o} />)}
        </select>
      </Div>
    );
  }
}

export default Invitation;
