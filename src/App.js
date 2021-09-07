import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route path='/' render={() => "JUST LANDING PAGE"} exact />
            <Route path='/success' render={() => "SUCCESS"} exact />
            <Route path='/failed' render={() => "FAILED"} exact />
            <Route path='/error' render={() => "ERROR"} exact />
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
