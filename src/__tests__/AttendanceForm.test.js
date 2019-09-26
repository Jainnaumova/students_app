import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import AttendanceForm from '../students/AttendanceForm';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<AttendanceForm {...props} />);

const props = {
  handleChangeAttendanceValue: jest.fn()
};

describe('AttendanceForm', () => {

  it('should match the shapshot', () => {
    const tree = renderer.create(
      <AttendanceForm { ...props }/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have correct initial state', () => {
    const expectedState = {
      attendanceValue: ''
    };
    const wrapper = component();
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it('should update state on input change', () => {
    const event = {preventDefault: () => {}, target: { value: 'abc'} };
    const expectedState = {
      attendanceValue: 'abc'
    };
    const wrapper = component();
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it('should call handleChangeAttendanceValue from props with correct argument', () => {
    const event = {preventDefault: () => {}};
    const wrapper = component();
    wrapper.instance().setState({ attendanceValue: 'xyz' });
    wrapper.instance().handleSubmit(event);
    expect(props.handleChangeAttendanceValue).toHaveBeenCalledWith('xyz');
    expect(props.handleChangeAttendanceValue).toHaveBeenCalledTimes(1);
  });

  it('should call handleSubmit on form submission', () => {
    const handleSubmit = jest.spyOn(AttendanceForm.prototype, 'handleSubmit');
    const event = {preventDefault: () => {}};
    const wrapper = component();
    wrapper.find('form').simulate('submit', event);
    expect(handleSubmit.mock.calls.length).toEqual(1);
    expect(handleSubmit.mock.calls[0][0]).toEqual(event);
  });

});
