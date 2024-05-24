import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Legion from './routes/Legion';
import Checklists from './routes/Checklists';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />


    </>
  )
}




const Navigation = () => {

  return (
    <div>
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
        {/* <Route path="legion/:id" element={<Character />} /> */}
        {/* <Route path="legion/:id/edit-progression" element={<EditProgression />} /> */}
        <Route path="checklists" element={<Checklists />} />
      </Routes>
    </div>
  )
}

export default App
