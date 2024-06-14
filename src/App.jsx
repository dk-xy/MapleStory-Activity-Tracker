import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Legion from './routes/Legion';
import Checklists from './routes/Checklists';
import Character from './routes/Character';
import EditCharacter from './routes/Character/EditCharacter';
import { IconUsers, IconChartPie, IconChecklist } from '@tabler/icons-react';

import { useDispatch } from 'react-redux';
import { resetDailyCompletionStatuses, resetWeeklyCompletionStatuses, resetDailyQuestsCompletionStatuses, resetBossCompletionStatuses } from './redux/actions/characters';
const App = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();


  useEffect(() => {
    // Dispatch the actions immediately on component mount
    dispatch(resetDailyCompletionStatuses());
    dispatch(resetWeeklyCompletionStatuses());
    dispatch(resetDailyQuestsCompletionStatuses());
    dispatch(resetBossCompletionStatuses());

    // Set up a timer to dispatch the actions every minute
    const timer = setInterval(() => {
      dispatch(resetDailyCompletionStatuses());
      dispatch(resetWeeklyCompletionStatuses());
      dispatch(resetDailyQuestsCompletionStatuses());
      dispatch(resetBossCompletionStatuses());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up function
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
      <Navigation />


    </>
  )
}




const Navigation = () => {

  return (
    <div className='App'>
      <nav>
        <ul className='appMenu'>
          <li className='menuElement'>
            {/* <StatsChart className='icon'
                          color={'#00000'}
                          title={'Dashboard'}
                          height="25px"
                          width="25px"
                      /> */}
            <NavLink to="/dashboard">
              <IconChartPie />
              <div className='menuLabel'>Dashboard</div>
              </NavLink>
          </li>
          <li className='menuElement'>
            {/* <People
                          color={'#00000'}
                          title={'Legion'}
                          height="25px"
                          width="25px"
                      /> */}
            <NavLink to="/legion" >
              <IconUsers />
              <div className='menuLabel'>Legion</div>
            </NavLink>
          </li>
          <li className='menuElement'>
            {/* <Checkbox
                          color={'#00000'}
                          title={'Checklists'}
                          height="25px"
                          width="25px"
                      /> */}
            <NavLink to="/checklists">
              <IconChecklist />
              <div className='menuLabel'>Checklists</div>
              </NavLink>
          </li>
          {/* Add other menu items */}
        </ul>
      </nav>

      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="legion" element={<Legion />} ></Route>
        <Route path="legion/:id" element={<Character />} />
        <Route path="legion/:id/edit" element={<EditCharacter />} />
        <Route path="checklists" element={<Checklists />} />
      </Routes>
    </div>
  )
}

export default App
