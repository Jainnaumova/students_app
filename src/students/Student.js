import React from 'react';

export default props => {
  const { student } = props;
  return (
    <div className='student-table'>
      <div>{student.studentId}</div>
      <div className='student-name'>
        {`${student.firstName} ${student.lastName}`}
        <div className='details-container'>
          <button className='button' onClick={() => props.displayStudentData(student)}>Details...</button>
        </div>
      </div>
      <div>{student.grade}</div>
      <div className='school-name'>{student.schoolName}</div>
      <div>{student.attendancePercentage}</div>
    </div>
  );
}
