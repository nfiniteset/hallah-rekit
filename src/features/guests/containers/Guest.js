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
        onSubmit={this.props.actions.addDietaryRestriction}
        guestId={this.props.guest.id}
        transientDietaryRestriction={this.props.transientDietaryRestriction}
      />
    </div>);
  }
}

/* istanbul ignore next */
function mapStateToProps(state, otherProps) {
  return {
    guestId: otherProps.match.params.id,
    guest: state.guests.selectedGuest,
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
