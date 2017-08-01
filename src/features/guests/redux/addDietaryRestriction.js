import upsertById from '../../../common/upsertById';
import request from '../../../common/request';
import {
  GUESTS_ADD_DIETARY_RESTRICTION_REQUEST,
  GUESTS_ADD_DIETARY_RESTRICTION_SUCCESS,
  GUESTS_ADD_DIETARY_RESTRICTION_FAILURE,
} from './constants';

function addDietaryRestrictionRequest() {
  return {
    type: GUESTS_ADD_DIETARY_RESTRICTION_REQUEST
  };
}

function addDietaryRestrictionSuccess(guestId, res) {
  return {
    type: GUESTS_ADD_DIETARY_RESTRICTION_SUCCESS,
    guest: res.data.addDietaryRestriction
  };
}

function addDietaryRestrictionFailure(error) {
  return {
    type: GUESTS_ADD_DIETARY_RESTRICTION_FAILURE,
    error
  };
}

const addDietaryRestrictionQuery = `
mutation AddDietaryRestriction($guestId: ID!, $dietaryRestriction: String!) {
  addDietaryRestriction(guestId: $guestId, dietaryRestriction: $dietaryRestriction) {
    id
    name
    dietaryRestrictions
  }
}
`;

export function addDietaryRestriction(guestId, dietaryRestriction) {
  return (dispatch) => {
    dispatch(addDietaryRestrictionRequest());
    return request(addDietaryRestrictionQuery, {
      guestId,
      dietaryRestriction
    })
      .then(res => dispatch(addDietaryRestrictionSuccess(guestId, res)))
      .catch(error => dispatch(addDietaryRestrictionFailure(error)));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_ADD_DIETARY_RESTRICTION_REQUEST: {
      return { ...state };
    }
    case GUESTS_ADD_DIETARY_RESTRICTION_SUCCESS:
      return {
        ...state,
        guests: upsertById(state.guests, action.guest),
        transientDietaryRestriction: ''
      };
    case GUESTS_ADD_DIETARY_RESTRICTION_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
}
