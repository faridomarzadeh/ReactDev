import React from 'react';
import './App.css';
import { Person } from './Components/Person';
import { Country } from './Components/Person';

function App() {
  return (
    <div className="App">
      <Person
      name='Farid'
      email='farid@test.com'
      age={22}
      isMarried ={false}
      friends={['Abc', 'FDE', 'XYZ']}
      country={Country.Iran}
      />
    </div>
  );
}

export default App;
