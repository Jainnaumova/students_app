import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Students from '../students/Students';
import Student from '../students/Student';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<Students />);

const students = [
  {
    "firstName": "Jamie",
    "lastName": "Tam",
    "studentId": "9618731",
    "schoolName": "New Visions HS",
    "schoolId": "123XYZ",
    "district": "1A",
    "email": "jamie.tam@newvisionshs.org",
    "grade": 11,
    "cohort": 2020,
    "attendancePercentage": 74.73,
    "guidanceCounselor": "Morales, Miles",
    "guidanceCounselorEmail": "morales.miles@newvisionshs.org",
    "homePhoneNumber": "718-910-5195",
    "advisor": "Stone, Victor",
    "officialClass": "718",
    "totalCreditsEarned": 21,
    "hasPassedRegents": true,
    "status": "Active",
    "adminDate": "Sept 2016"
  },
  {
    "firstName": "Adam",
    "lastName": "Tam",
    "studentId": "7395508",
    "schoolName": "New Visions HS",
    "schoolId": "123XYZ",
    "district": "1A",
    "email": "adam.tam@newvisionshs.org",
    "grade": 11,
    "cohort": 2020,
    "attendancePercentage": 78.07,
    "guidanceCounselor": "Kent, Clark",
    "guidanceCounselorEmail": "kent.clark@newvisionshs.org",
    "homePhoneNumber": "917-590-3079",
    "advisor": "Kyle, Selina",
    "officialClass": "345",
    "totalCreditsEarned": 24,
    "hasPassedRegents": true,
    "status": "Active",
    "adminDate": "Sept 2016"
  }
];

describe('Students', () => {

  it('should match the shapshot', () => {
    const tree = renderer.create(
      <Students />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have correct initial state', () => {
    const espectedState = {
      students: null,
      spinner: true,
      attendanceValue: 100,
      studentDetailsModal: false,
      studentToDisplay: null
    };
    const wrapper = component();
    expect(wrapper.instance().state).toEqual(espectedState);
  });

  it('should render no students message', () => {
    const wrapper = component();
    wrapper.instance().setState({ students: [], spinner: false });
    expect(wrapper.find(Student).length).toEqual(0);
    expect(wrapper.find('div[children="No Students Found"]').length).toEqual(1);
  });

  it('should render student components', () => {
    const wrapper = component();
    wrapper.instance().setState({ students: students, spinner: false });
    expect(wrapper.find(Student).length).toEqual(2);
  });

  it('should display student modal on function call', () => {
    const wrapper = component();
    wrapper.instance().displayStudentData(students[0]);
    const state = wrapper.instance().state;
    expect(state.studentToDisplay).toEqual(students[0]);
    expect(state.studentDetailsModal).toBeTruthy();
  });

  it('should change attendance value on function call and render correct list of students', () => {
    const wrapper = component();
    wrapper.instance().allStudents = students;
    wrapper.instance().handleChangeAttendanceValue(80);
    const state = wrapper.instance().state;
    expect(wrapper.instance().state.attendanceValue).toEqual(80);
    expect(wrapper.instance().state.students).toEqual(students);
    wrapper.instance().handleChangeAttendanceValue(75);
    expect(wrapper.instance().state.students).toEqual([students[0]]);
  });

});
