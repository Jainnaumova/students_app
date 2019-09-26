import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Student from '../students/Student';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  student: {
    studentId: 123,
    firstName: 'John',
    lastName: 'Doe',
    grade: 'CL-101',
    schoolName: 'PS52',
    attendancePercentage: 0.94
  },
  displayStudentData: jest.fn()
}

describe('Students', () => {

  it('should match the shapshot', () => {
    const tree = renderer.create(
      <Student { ...props }/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call displayStudentData from parent component with correct argument', () => {
    const wrapper = shallow(<Student {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.instance().props.displayStudentData).toHaveBeenCalledWith(props.student);
    expect(wrapper.instance().props.displayStudentData).toHaveBeenCalledTimes(1);
  });

});
