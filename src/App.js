import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Blog from './components/blog/Blog';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" exact component={About}/>
          <Route path="/blog" component={Blog}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
