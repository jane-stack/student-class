import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route><LoginPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
