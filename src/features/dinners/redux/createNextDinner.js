import moment from 'moment';

function followingFriday(date) {
  const momentDate = moment(date);
  const friOrSat = [5, 6].includes(momentDate.day());
  return momentDate.day(friOrSat ? 12 : 5);
}

import {
  DINNERS_CREATE_NEXT_DINNER,
} from './constants';

export function createNextDinner() {
  return {
    type: DINNERS_CREATE_NEXT_DINNER,
    dinner: {
      startAt: followingFriday(moment())
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DINNERS_CREATE_NEXT_DINNER:
      return {
        ...state,
        dinners: state.dinners.concat(action.dinner)
      };

    default:
      return state;
  }
}
