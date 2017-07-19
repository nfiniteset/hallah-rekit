import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/dinners/DefaultPage';

describe('dinners/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      dinners: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.dinners-default-page').node
    ).to.exist;
  });
});
