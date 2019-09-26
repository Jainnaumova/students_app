import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import StudentCard from '../students/StudentCard';

Enzyme.configure({ adapter: new Adapter() });

let props = {
  studentData: {
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
  },
}

describe('StudentCard', () => {

  it('should match the shapshot', () => {
    const tree = renderer.create(
      <StudentCard { ...props }/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should handle hasPassedRegents correctly', () => {
    const wrapperOne = shallow(<StudentCard {...props} />);
    expect(wrapperOne.find('div').at(52).text()).toEqual('YES');
    props.studentData.hasPassedRegents = false;
    const wrapperTwo = shallow(<StudentCard {...props} />);
    expect(wrapperTwo.find('div').at(52).text()).toEqual('NO');
  });

});
