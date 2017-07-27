import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

export class Guest extends Component {
  static propTypes = {
    guest: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    guestId: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    guest: null
  }

  componentDidMount() {
    this.props.actions.fetchGuest(this.props.guestId);
  }

  render() {
    return (
      <div className="guests-guest">
        <p>{this.props.guest ? this.props.guest.name : ''}</p>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state, otherProps) {
  return {
    guestId: otherProps.match.params.id,
    guest: state.guests.selectedGuest
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
