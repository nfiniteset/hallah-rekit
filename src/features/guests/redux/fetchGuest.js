import request from '../../../common/request';

import {
  GUESTS_FETCH_GUEST_REQUEST,
  GUESTS_FETCH_GUEST_FAILURE,
  GUESTS_FETCH_GUEST_SUCCESS,
} from './constants';

export function fetchGuestRequest() {
  return {
    type: GUESTS_FETCH_GUEST_REQUEST
  };
}

export function fetchGuestSuccess(res) {
  return {
    type: GUESTS_FETCH_GUEST_SUCCESS,
    guest: res.data.guest
  };
}

export function fetchGuestFailure(error) {
  return {
    type: GUESTS_FETCH_GUEST_FAILURE,
    error
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_FETCH_GUEST_FAILURE: {
      return { ...state, isFetching: false };
    }
    case GUESTS_FETCH_GUEST_REQUEST: {
      return { ...state, isFetching: true };
    }
    case GUESTS_FETCH_GUEST_SUCCESS: {
      return { ...state, selectedGuest: action.guest, isFetching: false };
    }
    default: {
      return state;
    }
  }
}

const fetchGuestQuery = `
query FetchGuest($id: ID!) {
  guest(id: $id) {
    id
    name
    dietaryRestrictions {
      label
    }
  }
}
`;

export function fetchGuest(guestId) {
  return (dispatch) => {
    dispatch(fetchGuestRequest());
    return request(fetchGuestQuery, {
      id: guestId
    })
      .then(json => dispatch(fetchGuestSuccess(json)))
      .catch(error => dispatch(fetchGuestFailure(error)));
  };
}
