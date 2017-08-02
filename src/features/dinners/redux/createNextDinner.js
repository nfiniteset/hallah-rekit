import request from '../../../common/request';
import {
  DINNERS_CREATE_NEXT_DINNER_REQUEST,
  DINNERS_CREATE_NEXT_DINNER_SUCCESS,
  DINNERS_CREATE_NEXT_DINNER_FAILURE,
} from './constants';
import parseDinner from './parseDinner';

function createNextDinnerRequest() {
  return {
    type: DINNERS_CREATE_NEXT_DINNER_REQUEST
  };
}

function createNextDinnerSuccess(data) {
  return {
    type: DINNERS_CREATE_NEXT_DINNER_SUCCESS,
    dinner: parseDinner(data.createNextDinner)
  };
}

function createNextDinnerFailure(error) {
  return {
    type: DINNERS_CREATE_NEXT_DINNER_FAILURE,
    error
  };
}

const createNextDinnerQuery = `
mutation CreateNextDinner {
  createNextDinner {
    startsAt
  }
}
`;

export function createNextDinner() {
  return (dispatch) => {
    dispatch(createNextDinnerRequest());
    return request(createNextDinnerQuery)
      .then(res => dispatch(createNextDinnerSuccess(res.data)))
      .catch(error => dispatch(createNextDinnerFailure(error)));
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DINNERS_CREATE_NEXT_DINNER_REQUEST:
      return state;
    case DINNERS_CREATE_NEXT_DINNER_SUCCESS:
      return {
        ...state,
        dinners: state.dinners.concat(action.dinner)
      };
    case DINNERS_CREATE_NEXT_DINNER_FAILURE:
      return state;
    default:
      return state;
  }
}
