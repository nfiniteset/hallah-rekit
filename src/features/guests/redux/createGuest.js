import {
  GUESTS_CREATE_GUEST,
} from './constants';

export function createGuest(guest) {
  return {
    type: GUESTS_CREATE_GUEST,
    guest
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_CREATE_GUEST:
      return {
        ...state,
        guests: state.guests.concat({
          ...action.guest,
          dietaryRestrictions: []
        }),
        transientGuest: {
          name: ''
        }
      };

    default:
      return state;
  }
}
