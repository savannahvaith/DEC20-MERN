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
      <Route>
        {/* Call a component for a 404 NOT FOUND */}
        <p>Sorry can't find what you're looking for!</p>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
