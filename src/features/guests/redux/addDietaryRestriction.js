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

function addDietaryRestrictionSuccess(res) {
  return {
    type: GUESTS_ADD_DIETARY_RESTRICTION_SUCCESS,
    guest: res.data.dietaryRestriction
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
    dietaryRestriction
  }
}
`;

export function addDietaryRestriction(guestId, dietaryRestriction) {
  return (dispatch) => {
    dispatch(addDietaryRestrictionRequest());
    return request(addDietaryRestrictionQuery, {
      input: { guestId, dietaryRestriction }
    })
      .then(json => dispatch(addDietaryRestrictionSuccess(json)))
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
        guests: state.guests.concat(action.guest),
        selectedGuest: Object.assign(state.selectedGuest, {
          dietaryRestrictions: state.selectedGuest.dietaryRestrictions.concat(action.dietaryRestriction)
        })
      };
    case GUESTS_ADD_DIETARY_RESTRICTION_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
}
