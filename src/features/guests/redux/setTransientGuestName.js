import {
  GUESTS_SET_TRANSIENT_GUEST_NAME,
} from './constants';

export function setTransientGuestName(name) {
  return {
    type: GUESTS_SET_TRANSIENT_GUEST_NAME,
    name
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GUESTS_SET_TRANSIENT_GUEST_NAME:
      return {
        ...state,
        transientGuest: {
          ...state.transientGuest,
          name: action.name
        }
      };

    default:
      return state;
  }
}
