import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'
import StudentInfo from './Pages/StudentInfo'
import ReportCard from './Pages/ReportCard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/studentInfo" element={<StudentInfo name='Manan Vora' section='XC' roll='001911001085' img='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />}>
        </Route>
        <Route path="/report" element={<ReportCard name='Manan Vora' section='XC' roll='001911001085'teacher='Mrs. S. Rehman' img='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;