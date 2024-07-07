import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { CreateForm } from './pages/create-post/create-form';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='createpost' element={<CreateForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
