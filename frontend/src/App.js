'use strict';

import Nav from "./Components/09-Routing/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/09-Routing/Home';
import About from './Components/09-Routing/About';
import Product from './Components/09-Routing/Product';
import User from "./Components/09-Routing/User";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Product />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
