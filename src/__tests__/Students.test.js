import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Students from '../students/Students';

Enzyme.configure({ adapter: new Adapter() });

describe('Students', () => {

  it('should match the shapshot', () => {
    const tree = renderer.create(
      <Students />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
