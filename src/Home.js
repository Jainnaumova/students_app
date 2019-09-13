import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='items-group'>
      <div className='item-button' onClick={() => props.history.push('/students')}>Students</div>
      <div className='item-button' onClick={() => props.history.push('/teachers')}>Teachers</div>
    </div>
  );
}

export default withRouter(Home);
