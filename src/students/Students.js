import React, { Component } from 'react';
import Modal from 'react-modal';
import Student from './Student';
import StudentCard from './StudentCard';
import AttendanceForm from './AttendanceForm';
import Spinner from '../shared/Spinner';
import { getStudents } from '../seed';

import './students.css';

const filterResults = (filter, data) => {
  return data.filter(student => {
    return student.attendancePercentage <= filter;
  });
};

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
      spinner: true,
      attendanceValue: 100,
      studentDetailsModal: false,
      studentToDisplay: null
    }
    this.handleChangeAttendanceValue = this.handleChangeAttendanceValue.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.displayStudentData = this.displayStudentData.bind(this);
  }

  async componentDidMount() {
    const data = await getStudents();
    data.sort((a, b) => b.attendancePercentage - a.attendancePercentage);
    this.allStudents = data;
    this.setState({ students: filterResults(this.state.attendanceValue, this.allStudents), spinner: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.attendanceValue !== this.state.attendanceValue) {
      this.setState({ students: filterResults(this.state.attendanceValue, this.allStudents) });
    }
  }

  handleChangeAttendanceValue(value) {
    this.setState({ attendanceValue: value });
  }

  hideModal() {
    this.setState({ studentDetailsModal: false });
  }

  displayStudentData(data) {
    this.setState({ studentToDisplay: data, studentDetailsModal: true });
  }

  renderList() {
    return (
      <div className='rows'>
        {this.state.students.map(student => (
          <div className='student-wrapper' key={student.studentId}>
            <Student
              displayStudentData={this.displayStudentData}
              student={student}
            />
          </div>
        ))}
      </div>
    );
  }

  renderEmptyList() {
    return (
      <div className='empty-table'>
        No Students Found
      </div>
    );
  }

  displayContent() {
    if (this.state.spinner) {
      return <Spinner />;
    } else if (!this.state.spinner && !this.state.students.length) {
      return this.renderEmptyList();
    } else {
      return this.renderList();
    }
  }

  render() {
    return (
      <div className="students-container">
        <div className='attendance-block'>
          <div>
            <div>Threshold Attendance</div>
            <AttendanceForm handleChangeAttendanceValue={this.handleChangeAttendanceValue} />
          </div>
        </div>
        <div className='students-nav'>
          <div>Id</div>
          <div className='student-name center'>Student</div>
          <div>Grade</div>
          <div className='school-name'>School</div>
          <div>Attendance (%)</div>
        </div>
        {this.displayContent()}
        {this.state.studentDetailsModal &&
          <Modal
            isOpen={this.state.studentDetailsModal}
            onRequestClose={this.hideModal}
            ariaHideApp={false}
            className='small-modal'
            overlayClassName='modal-overlay'
          >
            <StudentCard hideModal={this.hideModal} studentData={this.state.studentToDisplay} />
          </Modal>
        }
      </div>
    );
  }
}

export default Students;
