import * as React from 'react';
import { Router } from "@reach/router";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Signup from './pages/Signup';
import Login from './pages/Login';

import './App.css';

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Profile path="/profile" />
      <Questions path="/questions" />
      <Login path="/login" />
      <Signup path="/signup" />
    </Router>
  )
}

export default App;
