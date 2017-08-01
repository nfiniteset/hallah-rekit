import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddDietaryRestrictionForm from '../presenters/AddDietaryRestrictionForm';

export class Guest extends Component {
  static propTypes = { actions: PropTypes.object.isRequired,
    guest: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      }
    ),
    guestId: PropTypes.string.isRequired,
    transientDietaryRestriction: PropTypes.string.isRequired };

  static defaultProps = { guest: null };

  componentDidMount() {
    this.props.actions.fetchGuest(this.props.guestId);
  }

  handleAddDietaryRestrictionSubmit = () => {
    this.props.actions.addDietaryRestriction(
      this.props.guest.id, this.props.transientDietaryRestriction);
  }

  render() {
    if (!this.props.guest) {
      return null;
    }

    return (<div className="guests-guest">
      <p>
        {this.props.guest.name}
      </p>
      <AddDietaryRestrictionForm
        onInput={this.props.actions.setTransientDietaryRestriction}
        onSubmit={this.handleAddDietaryRestrictionSubmit}
        guestId={this.props.guest.id}
        transientDietaryRestriction={this.props.transientDietaryRestriction}
      />
      {this.props.guest.dietaryRestrictions.map(d => <p key={d}>{d}</p>)}
    </div>);
  }
}

/* istanbul ignore next */
function mapStateToProps(state, otherProps) {
  const guestId = otherProps.match.params.id;
  const guest = state.guests.guests.find(g => g.id === guestId);
  return {
    guestId,
    guest,
    transientDietaryRestriction: state.guests.transientDietaryRestriction
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guest);
