import upsertById from '../../../common/upsertById';
import request from '../../../common/request';

import {
  DINNERS_UPDATE_INVITATION_REQUEST,
  DINNERS_UPDATE_INVITATION_SUCCESS,
  DINNERS_UPDATE_INVITATION_FAILURE
} from './constants';

function updateInvitationRequest() {
  return {
    type: DINNERS_UPDATE_INVITATION_REQUEST
  };
}

function updateInvitationSuccess(data) {
  return {
    type: DINNERS_UPDATE_INVITATION_SUCCESS,
    dinner: data.updateInvitation.dinner
  };
}

function updateInvitationFailure(error) {
  return {
    type: DINNERS_UPDATE_INVITATION_FAILURE,
    error
  };
}

const updateInvitationQuery = `
mutation UpdateInvitation($input: UpdateInvitationInput!) {
  updateInvitation(input: $input) {
    id
    startsAt
    invitations {
      id
      guestId
      state
    }
  }
}
`;

export function updateInvitation(attrs) {
  return (dispatch) => {
    dispatch(updateInvitationRequest());
    return request(updateInvitationQuery, { input: attrs })
      .then(res => updateInvitationSuccess(res.data))
      .catch(error => updateInvitationFailure(error));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DINNERS_UPDATE_INVITATION_REQUEST: {
      return { ...state };
    }
    case DINNERS_UPDATE_INVITATION_FAILURE: {
      return { ...state };
    }
    case DINNERS_UPDATE_INVITATION_SUCCESS: {
      return {
        ...state,
        dinners: upsertById(state.dinners.dinners, action.dinner)
      };
    }
    default: {
      return { ...state };
    }
  }
}
