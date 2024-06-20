import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createContext, useContext, useState } from 'react';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { ErrorPage } from './pages/Error';
import { Navbar } from './Navbar';

export const AppContext = createContext();
function App() {
  const [userName,setUserName] = useState("User");

  return (
    <div className="App">
      <AppContext.Provider value={{userName,setUserName}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
