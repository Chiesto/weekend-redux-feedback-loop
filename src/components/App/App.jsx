import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//importing my components
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        {/* path to the main page to assess how the user is feeling today */}
        <Route exact path="/">
          <Feeling />
        </Route>
        {/* path to the second page to see how well they are understanding the content */}
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
        {/* path to the 3rd page to see how well they are being supported */}
        <Route exact path="/support">
          <Support/>
        </Route>
        {/* path to the 4th page for comments */}
        <Route exact path="/comments">

        </Route>
        {/* path to the 5th page to review feedback */}
        <Route>

        </Route>
        {/* path to the 6th page - confirmation that feedback was submitted */}
        <Route>

        </Route>
        {/* path to the 7th page to show all the feedback results */}
        <Route>

        </Route>
      </Router>

    </div>
  );
}

export default App;
