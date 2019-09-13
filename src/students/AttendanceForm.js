import React, { Component } from 'react';

import './students.css';

export default class AttendanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ attendanceValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleChangeAttendanceValue(this.state.attendanceValue);
  }

  render() {
    return (
      <div className='input-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            className='inputForm'
            max='100.00'
            step='any'
            min='0.00'
            value={this.state.attendanceValue}
            onChange={this.handleChange}
          />
          <button type='submit' className='button'>Apply</button>
        </form>
      </div>
    );
  }
}
