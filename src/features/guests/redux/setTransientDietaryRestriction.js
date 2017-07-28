import {
  GUESTS_SET_TRANSIENT_DIETARY_RESTRICTION,
} from './constants';

export function setTransientDietaryRestriction(dietaryRestriction) {
  return { type: GUESTS_SET_TRANSIENT_DIETARY_RESTRICTION, dietaryRestriction };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_SET_TRANSIENT_DIETARY_RESTRICTION:
      return { ...state, transientDietaryRestriction: action.dietaryRestriction };

    default:
      return state;
  }
}
