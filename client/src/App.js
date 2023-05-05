import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import { Main, Navigation } from './main/content';
import { Header } from './main/headerfooter';


function App() {
    return <Router>
      <div className="container">
        <Header />
        <Navigation />
        <Main />
      </div>
      </Router>
  }
  
  export default App;