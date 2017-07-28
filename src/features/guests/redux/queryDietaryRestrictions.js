import request from '../../../common/request';

import {
  GUESTS_QUERY_DIETARY_RESTRICTIONS_REQUEST,
  GUESTS_QUERY_DIETARY_RESTRICTIONS_FAILURE,
  GUESTS_QUERY_DIETARY_RESTRICTIONS_SUCCESS,
} from './constants';

export function queryDietaryRestrictionsRequest() {
  return {
    type: GUESTS_QUERY_DIETARY_RESTRICTIONS_REQUEST
  };
}

export function queryDietaryRestrictionsSuccess(res) {
  return {
    type: GUESTS_QUERY_DIETARY_RESTRICTIONS_SUCCESS,
    guests: res.data.dietaryRestrictions
  };
}

export function queryDietaryRestrictionsFailure(error) {
  return {
    type: GUESTS_QUERY_DIETARY_RESTRICTIONS_FAILURE,
    error
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_QUERY_DIETARY_RESTRICTIONS_FAILURE: {
      return { ...state };
    }
    case GUESTS_QUERY_DIETARY_RESTRICTIONS_REQUEST: {
      return { ...state };
    }
    case GUESTS_QUERY_DIETARY_RESTRICTIONS_SUCCESS: {
      return { ...state, queriedDietaryRestrictions: action.dietaryRestrictions };
    }
    default: {
      return state;
    }
  }
}

const queryDietaryRestrictionsQuery = `
{
  dietaryRestricitons {
    id
    label
  }
}
`;

export function queryDietaryRestrictions() {
  return (dispatch) => {
    dispatch(queryDietaryRestrictionsRequest());
    return request(queryDietaryRestrictionsQuery)
      .then(json => dispatch(queryDietaryRestrictionsSuccess(json)))
      .catch(error => dispatch(queryDietaryRestrictionsFailure(error)));
  };
}
