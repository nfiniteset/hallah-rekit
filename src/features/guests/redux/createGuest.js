import request from '../../../common/request';
import {
  GUESTS_CREATE_GUEST_REQUEST,
  GUESTS_CREATE_GUEST_SUCCESS,
  GUESTS_CREATE_GUEST_FAILURE,
} from './constants';

function createGuestRequest() {
  return {
    type: GUESTS_CREATE_GUEST_REQUEST
  };
}

function createGuestSuccess(res) {
  return {
    type: GUESTS_CREATE_GUEST_SUCCESS,
    guest: res.data.createGuest
  };
}

function createGuestFailure(error) {
  return {
    type: GUESTS_CREATE_GUEST_FAILURE,
    error
  };
}

const createGuestQuery = `
mutation CreateGuest($input: GuestInput!) {
  createGuest(input: $input) {
    id
    name
    dietaryRestrictions {
      label
    }
  }
}
`;

export function createGuest(guest) {
  return (dispatch) => {
    dispatch(createGuestRequest());
    return request(createGuestQuery, {
      input: { name: guest.name }
    })
      .then(json => dispatch(createGuestSuccess(json)))
      .catch(error => dispatch(createGuestFailure(error)));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_CREATE_GUEST_REQUEST: {
      return { ...state, isFetching: true };
    }
    case GUESTS_CREATE_GUEST_SUCCESS:
      return {
        ...state,
        guests: state.guests.concat(action.guest),
        transientGuest: {
          name: ''
        }
      };
    case GUESTS_CREATE_GUEST_FAILURE: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
}
