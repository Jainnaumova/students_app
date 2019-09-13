import React from 'react';

import './student-card.css';

export default props => {
  const { studentData } = props;
  return (
    <div>
      <div className='title'>Student Details</div>
      <div className='student-card'>
        <div>
          <div className='block'>
            <div className='sub-title'>Student ID</div>
            <div className='data'>{studentData.studentId}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Student Name</div>
            <div className='data'>{`${studentData.firstName} ${studentData.lastName}`}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>School Name</div>
            <div className='data'>{studentData.schoolName}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>School ID</div>
            <div className='data'>{studentData.schoolId}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>District</div>
            <div className='data'>{studentData.district}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Email</div>
            <div className='data'>{studentData.email}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Grade</div>
            <div className='data'>{studentData.grade}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Cohort</div>
            <div className='data'>{studentData.cohort}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Attendance Percentage</div>
            <div className='data'>{studentData.attendancePercentage}</div>
          </div>
        </div>
        <div>
          <div className='block'>
            <div className='sub-title'>Guidance Counselor</div>
            <div className='data'>{studentData.guidanceCounselor}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Guidance Counselor Email</div>
            <div className='data'>{studentData.guidanceCounselorEmail}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Home Phone Number</div>
            <div className='data'>{studentData.homePhoneNumber}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Advisor</div>
            <div className='data'>{studentData.advisor}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Official Class</div>
            <div className='data'>{studentData.officialClass}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Total Credits Earned</div>
            <div className='data'>{studentData.totalCreditsEarned}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Has Passed Regents</div>
            <div className='data'>{studentData.hasPassedRegents ? 'YES' : 'NO'}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Status</div>
            <div className='data'>{studentData.status}</div>
          </div>
          <div className='block'>
            <div className='sub-title'>Admin Date</div>
            <div className='data'>{studentData.adminDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
