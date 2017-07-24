import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Hello name="foo" />);
  });

  it('should render text', () => {
    expect(component.text()).toBe('Hello foo');
  });
});
