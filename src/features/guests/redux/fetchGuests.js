import request from '../../../common/request';

import {
  GUESTS_FETCH_GUESTS_REQUEST,
  GUESTS_FETCH_GUESTS_FAILURE,
  GUESTS_FETCH_GUESTS_SUCCESS,
} from './constants';

export function fetchGuestsRequest() {
  return {
    type: GUESTS_FETCH_GUESTS_REQUEST
  };
}

export function fetchGuestsSuccess(res) {
  return {
    type: GUESTS_FETCH_GUESTS_SUCCESS,
    guests: res.data.guests
  };
}

export function fetchGuestsFailure(error) {
  return {
    type: GUESTS_FETCH_GUESTS_FAILURE,
    error
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_FETCH_GUESTS_FAILURE: {
      return { ...state, isFetching: false };
    }
    case GUESTS_FETCH_GUESTS_REQUEST: {
      return { ...state, isFetching: true };
    }
    case GUESTS_FETCH_GUESTS_SUCCESS: {
      return { ...state, guests: action.guests, isFetching: false };
    }
    default: {
      return state;
    }
  }
}

const fetchGuestsQuery = `
{
  guests {
    id
    name
    dietaryRestrictions {
      label
    }
  }
}
`;

export function fetchGuests() {
  return (dispatch) => {
    dispatch(fetchGuestsRequest());
    return request(fetchGuestsQuery)
      .then(json => dispatch(fetchGuestsSuccess(json)))
      .catch(error => dispatch(fetchGuestsFailure(error)));
  };
}
