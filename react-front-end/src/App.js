import React from 'react';
import './App.css';
import Landing from './components/Landing';
import {Typography} from '@material-ui/core'
import Tasks from './components/Tasks';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Typography variant="h1">Rally</Typography>
      <Landing></Landing>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
