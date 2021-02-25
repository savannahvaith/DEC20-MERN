import Navigation from './Components/Header/Navigation';
import './Resources/App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Components/Header/HomePage';
import About from './Components/Header/About';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
      <Route path="/" exact>
          <HomePage/>
      </Route>
      <Route path="/about">
          <About/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
