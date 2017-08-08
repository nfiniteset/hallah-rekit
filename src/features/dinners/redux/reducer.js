import initialState from './initialState';
import { reducer as createNextDinnerReducer } from './createNextDinner';
import { reducer as fetchDinnersReducer } from './fetchDinners';
import { reducer as inviteGuestReducer } from './inviteGuest';

const reducers = [
  fetchDinnersReducer,
  createNextDinnerReducer,
  inviteGuestReducer,
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
