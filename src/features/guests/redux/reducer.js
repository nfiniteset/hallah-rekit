import initialState from './initialState';
import { reducer as createGuestReducer } from './createGuest';
import { reducer as setTransientGuestNameReducer } from './setTransientGuestName';

const reducers = [
  createGuestReducer,
  setTransientGuestNameReducer,
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
