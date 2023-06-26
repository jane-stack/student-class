import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Setting from './pages/Setting';

function App() {
  const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        fetch('/courses')
        .then(resp => resp.json())
        .then(courses => setCourses(courses))
    }, [])

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/courses"><CourseList courses={courses} /></Route>
          <Route path="/settings"><Setting /></Route>
          <Route path="/"><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
