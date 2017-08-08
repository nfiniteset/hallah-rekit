import request from '../../../common/request';
import {
  DINNERS_FETCH_DINNERS_REQUEST,
  DINNERS_FETCH_DINNERS_SUCCESS,
  DINNERS_FETCH_DINNERS_FAILURE,
} from './constants';
import parseDinner from './parseDinner';

const fetchDinnersQuery = `
query {
  dinners {
    id
    startsAt
    invitations {
      guestId
      state
    }
  }
}
`;

function fetchDinnersRequest() {
  return {
    type: DINNERS_FETCH_DINNERS_REQUEST
  };
}

function fetchDinnersSuccess(res) {
  return {
    type: DINNERS_FETCH_DINNERS_SUCCESS,
    dinners: res.data.dinners.map(d => parseDinner(d))
  };
}

function fetchDinnersFailure(error) {
  return {
    type: DINNERS_FETCH_DINNERS_FAILURE,
    error
  };
}

export function fetchDinners() {
  return (dispatch) => {
    dispatch(fetchDinnersRequest());
    request(fetchDinnersQuery)
      .then(res => dispatch(fetchDinnersSuccess(res)))
      .catch(error => dispatch(fetchDinnersFailure(error)));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DINNERS_FETCH_DINNERS_REQUEST: {
      return { ...state };
    }
    case DINNERS_FETCH_DINNERS_SUCCESS: {
      return {
        ...state,
        dinners: action.dinners
      };
    }
    case DINNERS_FETCH_DINNERS_FAILURE: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
