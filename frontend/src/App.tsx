import * as React from 'react';
import { Router, Link } from "@reach/router";

import Home from './pages/Home';
import './App.css';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

interface User {
  email: string;
  needs: string[];
}

const App = () => {
  return (
    <>
      <header>hello</header>
      <main>
        <Router>
          <Home path="/" />
          <Profile path="/profile" />
          <Signup path="/signup" />
        </Router>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
