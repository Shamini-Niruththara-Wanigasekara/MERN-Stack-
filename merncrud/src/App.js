import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import StudentForm from './components/StudentForm';
import StudentItem from './components/StudentItem';
import StudentList from './components/StudentList';


function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentform" element={<StudentForm/>} />
        <Route path="/studentitem" element={<StudentItem/>} />
        <Route path="/studentlist" element={<StudentList/>} />
        </Routes>
    </Router>
  );
}

export default App;