import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
          <Route><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
