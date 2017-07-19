import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/guests/DefaultPage';

describe('guests/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      guests: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.guests-default-page').node
    ).to.exist;
  });
});
