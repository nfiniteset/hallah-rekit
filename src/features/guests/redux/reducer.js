import initialState from './initialState';
import { reducer as addDietaryRestrictionReducer } from './addDietaryRestriction';
import { reducer as createGuestReducer } from './createGuest';
import { reducer as fetchGuestsReducer } from './fetchGuests';
import { reducer as fetchGuestReducer } from './fetchGuest';
import { reducer as queryDietaryRestrictionsReducer } from './queryDietaryRestrictions';
import { reducer as setTransientGuestNameReducer } from './setTransientGuestName';
import { reducer as setTransientDietaryRestrictionReducer } from './setTransientDietaryRestriction';

const reducers = [
  addDietaryRestrictionReducer,
  createGuestReducer,
  fetchGuestsReducer,
  fetchGuestReducer,
  queryDietaryRestrictionsReducer,
  setTransientGuestNameReducer,
  setTransientDietaryRestrictionReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
