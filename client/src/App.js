import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorsContext } from './context/ErrorsContext';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import Setting from './pages/Setting';
import StudentDetail from './pages/StudentDetail';

function App() {
  const { setErrors } = useContext(ErrorsContext);
  const [ courses, setCourses ] = useState([]);
  const [ students, setStudents ] = useState([]);
  const [ selectedStudent, setSelectedStudent ] = useState(null);

  useEffect(() => {
    fetch('/courses')
    .then(resp => resp.json())
    .then(data => setCourses(data))
    .catch(error => setErrors(error));
  }, [setErrors]) 

  useEffect(() => {
    fetch(`/students`)
    .then(resp => resp.json())
    .then(data => setStudents(data))
    .catch(error => setErrors(error))
  }, [setErrors])

  const handleClick = (student) => {
    setSelectedStudent(student);
  }


  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
          <Route path="/students/:id/registers"><StudentDetail students={students} selectedStudent={selectedStudent} courses={courses} /></Route>
          {/* <Route path="/home"><Home /></Route> */}
          <Route path="/home"><CourseList courses={courses} students={students} handleClick={handleClick} /></Route>
          <Route path="/settings"><Setting /></Route>
          <Route path="/"><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
