import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const React = require('react');

function GuestListItem(props) {
  return (
    <p>
      <Link to={`${props.id}`}>{props.name}</Link>
    </p>
  );
}

GuestListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default GuestListItem;
