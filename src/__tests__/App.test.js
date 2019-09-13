import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

it('renders App component correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
