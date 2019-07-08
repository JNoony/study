import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './component/Header';
// import Footer from './component/Footer';
import Main from './container/Main';
import Page1 from './container/Page1';
import Page2 from './container/Page2';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </div>
    </Router>
  );
}

export default App;
