import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { fetchGuests } from '../../guests/redux/actions';

import Dinner from '../presenters/Dinner';

export class UpcomingDinners extends Component {
  static propTypes = {
    dinners: PropTypes.array.isRequired,
    guests: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.fetchDinners();
    this.props.actions.fetchGuests();
  }

  render() {
    return (
      <div className="dinners-default-page">
        {this.props.dinners.map(dinner => (
          <Dinner
            {...dinner}
            guests={this.props.guests}
            inviteGuest={this.props.actions.inviteGuest}
            key={dinner.startsAt}
          />
        ))}
        <button onClick={this.props.actions.createNextDinner}>Next dinner</button>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dinners: state.dinners.dinners,
    guests: state.guests.guests
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, fetchGuests }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingDinners);
