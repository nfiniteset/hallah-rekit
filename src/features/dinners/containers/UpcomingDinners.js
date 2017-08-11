import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { fetchGuests } from '../../guests/redux/actions';

import Dinner from '../presenters/Dinner';
import Invitation from '../presenters/Invitation';

export class UpcomingDinners extends Component {
  static propTypes = {
    dinners: PropTypes.arrayOf(PropTypes.shape({
      invitations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
      }))
    })),
    guests: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    dinners: [],
    guests: []
  }

  componentDidMount() {
    this.props.actions.fetchDinners();
    this.props.actions.fetchGuests();
  }

  invitationsFor(dinner) {
    return dinner.invitations.map(invitation => ({
      invitation,
      guest: this.props.guests.find(g => g.id === invitation.guestId)
    }));
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
          >
            {this.invitationsFor(dinner).map(({ invitation, guest }) => (
              <Invitation {...invitation} guest={guest} key={invitation.id} />
            ))}
          </Dinner>
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
