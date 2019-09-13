import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './Home';
import Sidebar from './shared/Sidebar';
import Students from './students/Students';
import Teachers from './teachers/Teachers';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <div>
        <div className='navbar-container'>
          <Navbar />
        </div>
        <div className='main-container'>
          <div className='sidebar-container'>
            <Sidebar />
          </div>
          <div className='selection-container'>
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/students" exact component={ Students } />
              <Route path="/teachers" exact component={ Teachers } />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
