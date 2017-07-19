import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Guest extends Component {
  static propTypes = {
    guests: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })).isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="guests-guest">
        Page Content: guests/Guest
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    guests: state.guests,
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
