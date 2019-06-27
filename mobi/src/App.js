import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import Header from './component/Header';
import Footer from './component/Footer'
import Main from './container/Main';
import Service from './container/Service';
import Recruit from './container/Recruit';
import Job from './container/Job';

class App extends Component{

  render(){
    return(
      <Router>
        <div className="contents-wrap">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/recruit" component={Recruit} />
          <Route exact path="/job" component={Job} />
          {/* <Route exact path="/viewer/:episodeId" component={Viewer} /> */}
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
