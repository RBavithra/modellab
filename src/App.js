import React from 'react';
import './App.css';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <h1>Student Attendance Tracking System</h1>
      <StudentList />
    </div>
  );
}

export default App;
