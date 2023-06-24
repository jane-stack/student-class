import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
          <Route><Home /></Route>
          <Route><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
