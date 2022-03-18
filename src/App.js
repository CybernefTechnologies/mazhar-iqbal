import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { user_data } from './api/api';
import { Home } from './components/Home';
import UserLoginDetail from './components/UserLoginDetail';

function App() {
  const [data, setData] = useState([])
  const dataFunc = async () => {
    const data = await user_data();
    setData(data.results)
  }
  useEffect(() => {
    dataFunc();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home userdata={data} />} />
        <Route path='/userlogindetail' element={<UserLoginDetail userdata={data} />} />
      </Routes>
    </div>
  );
}

export default App;
