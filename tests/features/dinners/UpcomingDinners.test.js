import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UpcomingDinners } from 'src/features/dinners/containers/UpcomingDinners';

describe('dinners/UpcomingDinners', () => {
  it('renders node with correct class name', () => {
    const props = {
      dinners: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UpcomingDinners {...props} />
    );

    expect(
      renderedComponent.find('.dinners-default-page').node
    ).to.exist;
  });
});
