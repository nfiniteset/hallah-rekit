import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Guest } from 'src/features/guests/Guest';

describe('guests/Guest', () => {
  it('renders node with correct class name', () => {
    const props = {
      guests: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Guest {...props} />
    );

    expect(
      renderedComponent.find('.guests-guest').node
    ).to.exist;
  });
});
