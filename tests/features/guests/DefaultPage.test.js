import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Guests } from 'src/features/guests/containers/Guests';

describe('guests/Guests', () => {
  it('renders node with correct class name', () => {
    const props = {
      guests: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Guests {...props} />
    );

    expect(
      renderedComponent.find('.guests-default-page').node
    ).to.exist;
  });
});
