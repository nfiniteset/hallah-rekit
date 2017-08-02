import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    dinners: PropTypes.arrayOf(PropTypes.shape({
      startsAt: PropTypes.instanceOf(Date)
    })).isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="dinners-default-page">
        <button onClick={this.props.actions.createNextDinner}>Next dinner</button>
        {this.props.dinners.map(dinner => (
          <p key={dinner.startsAt}>{dinner.startsAt.toString()}</p>
        ))}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dinners: state.dinners.dinners,
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
