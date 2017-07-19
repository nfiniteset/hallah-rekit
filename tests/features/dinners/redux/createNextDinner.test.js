import { expect } from 'chai';

import {
  DINNERS_CREATE_NEXT_DINNER,
} from 'src/features/dinners/redux/constants';

import {
  createNextDinner,
  reducer,
} from 'src/features/dinners/redux/createNextDinner';

describe('dinners/redux/createNextDinner', () => {
  it('returns correct action by createNextDinner', () => {
    expect(createNextDinner()).to.have.property('type', DINNERS_CREATE_NEXT_DINNER);
  });

  it('handles action type DINNERS_CREATE_NEXT_DINNER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DINNERS_CREATE_NEXT_DINNER }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
