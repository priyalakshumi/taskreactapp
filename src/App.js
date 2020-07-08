import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route,Switch,Redirect, useHistory} from 'react-router-dom'
import Router from './Router'

function App() {

return (
      <div>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    </div>
  );
}

export default App;
