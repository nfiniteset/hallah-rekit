import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Guest from '../../guests/presenters/Guest';

const Div = styled.div`
  margin-bottom: 20px;
`;

class Invitation extends Component {
  static propTypes = {
    guest: PropTypes.object.isRequired,
    state: PropTypes.string.isRequired
  }
  render() {
    return (
      <Div>
        <Guest {...this.props.guest} />
        <p>{this.props.state}</p>
      </Div>
    );
  }
}

export default Invitation;
