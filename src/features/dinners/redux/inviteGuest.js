import request from '../../../common/request';
import upsertById from '../../../common/upsertById';
import {
  DINNERS_INVITE_GUEST_REQUEST,
  DINNERS_INVITE_GUEST_SUCCESS,
  DINNERS_INVITE_GUEST_FAILURE
} from './constants';
import parseDinner from './parseDinner';

function inviteGuestRequest() {
  return {
    type: DINNERS_INVITE_GUEST_REQUEST
  };
}

function inviteGuestFailure(error) {
  return {
    type: DINNERS_INVITE_GUEST_FAILURE,
    error
  };
}

function inviteGuestSuccess(data) {
  return {
    type: DINNERS_INVITE_GUEST_SUCCESS,
    dinner: parseDinner(data.inviteGuest)
  };
}

const inviteGuestQuery = `
mutation InviteGuest($input: InvitationInput!) {
  inviteGuest(input: $input) {
    id
    startsAt
    invitations {
      id
      state
      guestId
    }
  }
}
`;

export function inviteGuest(dinnerId, guestId) {
  return (dispatch) => {
    dispatch(inviteGuestRequest());
    request(inviteGuestQuery, { input: { dinnerId, guestId } })
      .then(res => dispatch(inviteGuestSuccess(res.data)))
      .catch(error => dispatch(inviteGuestFailure(error)));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DINNERS_INVITE_GUEST_REQUEST: {
      return { ...state };
    }
    case DINNERS_INVITE_GUEST_FAILURE: {
      return { ...state };
    }
    case DINNERS_INVITE_GUEST_SUCCESS: {
      return {
        ...state,
        dinners: upsertById(state.dinners, action.dinner)
      };
    }
    default: {
      return { ...state };
    }
  }
}
