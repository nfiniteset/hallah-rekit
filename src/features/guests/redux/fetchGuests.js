import fetch from 'isomorphic-fetch';

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
    return fetch('/graphql', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        query: fetchGuestsQuery
      }),
    })
      .then(response => response.json(), err => console.log('An error occured.', err))
      .then(json => dispatch(fetchGuestsSuccess(json)));
  };
}
