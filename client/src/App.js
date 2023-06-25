import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseList from './pages/CourseList';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/courses"><CourseList /></Route>
          <Route path="/"><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
