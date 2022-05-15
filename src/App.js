import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

//Routes
import {appRoutes, privateRoutes} from './routes';

import './App.css';
import { isAuthenticated } from './utils';

function App() {
  let [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    const loggedIn = isAuthenticated();
    setAuthenticated(loggedIn);
  }, [authenticated]);

  const getRoutes = (routes) => {
    return routes.map((route, indx) => {  
      return <Route 
        exact 
        path={route.path}
        key={indx} 
        element={<route.component/>}
      />
    })
  }

  return (
    <Router>
      <Routes>
        {
          authenticated 
          ? (
            getRoutes(privateRoutes)
          )
          : (
            getRoutes(appRoutes)
          )
        }
      </Routes>
    </Router>
  );
}

export default App;
