import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Legion from './routes/Legion';
import Checklists from './routes/Checklists';
import Character from './routes/Character';
import EditCharacter from './routes/Character/EditCharacter';

import { useDispatch } from 'react-redux';
import { resetCompletionStatuses } from './redux/actions/characters';

const App = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(resetCompletionStatuses());
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className='menuElement'>
            {/* <People
                          color={'#00000'}
                          title={'Legion'}
                          height="25px"
                          width="25px"
                      /> */}
            <Link to="/legion">Legion</Link>
          </li>
          <li className='menuElement'>
            {/* <Checkbox
                          color={'#00000'}
                          title={'Checklists'}
                          height="25px"
                          width="25px"
                      /> */}
            <Link to="/checklists">Checklists</Link>
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
