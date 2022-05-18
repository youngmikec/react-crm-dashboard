import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

//Routes
import {appRoutes, privateRoutes} from './routes';

// login page
import Login from './pages/login';

import './App.css';
import { isAuthenticated } from './utils';
import { ToastContainer } from 'react-toastify';

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
        element={<route.component auth={{ authenticated, setAuthenticated }}/>}
      />
    })
  }

  return (
    <Router>
      <ToastContainer />
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
        <Route exact path="*" element={<Login auth={{ authenticated, setAuthenticated }} />} />
      </Routes>
    </Router>
  );
}

export default App;
