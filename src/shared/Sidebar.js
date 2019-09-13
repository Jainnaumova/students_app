import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div >
      <div className='selection-item'>
        <Link to="/">Home</Link>
      </div>
      <div className='selection-item'>
        <Link to="/students">Students</Link>
      </div>
      <div className='selection-item'>
        <Link to="/teachers">Teachers</Link>
      </div>
    </div>
  )
}
