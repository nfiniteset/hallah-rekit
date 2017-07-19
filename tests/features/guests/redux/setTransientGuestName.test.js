import { expect } from 'chai';

import {
  GUESTS_SET_TRANSIENT_GUEST_NAME,
} from 'src/features/guests/redux/constants';

import {
  setTransientGuestName,
  reducer,
} from 'src/features/guests/redux/setTransientGuestName';

describe('guests/redux/setTransientGuestName', () => {
  it('returns correct action by setTransientGuestName', () => {
    expect(setTransientGuestName()).to.have.property('type', GUESTS_SET_TRANSIENT_GUEST_NAME);
  });

  it('handles action type GUESTS_SET_TRANSIENT_GUEST_NAME correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: GUESTS_SET_TRANSIENT_GUEST_NAME }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
