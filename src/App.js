import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Switch>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route path='/' render={() => "JUST LANDING PAGE"} exact />
          <Route path='/success' render={() => "SUCCESS"} />
          <Route path='/failed' render={() => "FAILED"} />
          <Route path='/error' render={() => "ERROR"} />
        </header>
      </div>
    </Switch>
  );
}

export default App;
