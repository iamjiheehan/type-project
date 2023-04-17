import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  interface Student {
    name : string;
  }

  interface Student {
    score : number;
  }

  const student : Student = {
    name : "John",
    score : 100,
  }  

  console.log(student);
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
