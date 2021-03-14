import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import MainRouter from './components/routers/MainRouter';
import UserContext from './contexts/UserContext';


function App() {
  const [userState, setUserState] = useState({id: null, name: null})
  return (
    <UserContext.Provider value={{userState, setUserState}} >
      <div className="App">
        <MainRouter />
      </div>
    </UserContext.Provider>
  );
}

export default App;
