import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faComments, faEnvelope)

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
        <Contact />
    </React.Fragment>
  );
}

export default App;
