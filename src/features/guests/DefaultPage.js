import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import NewGuestForm from './NewGuestForm';

export class DefaultPage extends Component {
  static propTypes = {
    guests: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
    transientGuest: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="guests-default-page">
        <NewGuestForm
          transientGuest={this.props.transientGuest}
          onSubmit={this.props.actions.createGuest}
          onInput={this.props.actions.setTransientGuestName}
        />
        {this.props.guests.map(guest => (
          <p key={guest.name}>{guest.name}</p>
        )).reverse()}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    guests: state.guests.guests,
    transientGuest: state.guests.transientGuest
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
)(DefaultPage);
