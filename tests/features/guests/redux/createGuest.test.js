import { expect } from 'chai';

import {
  GUESTS_CREATE_GUEST,
} from 'src/features/guests/redux/constants';

import {
  createGuest,
  reducer,
} from 'src/features/guests/redux/createGuest';

describe('guests/redux/createGuest', () => {
  it('returns correct action by createGuest', () => {
    expect(createGuest()).to.have.property('type', GUESTS_CREATE_GUEST);
  });

  it('handles action type GUESTS_CREATE_GUEST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: GUESTS_CREATE_GUEST }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
