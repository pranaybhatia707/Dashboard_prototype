import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LoginForm from "./component/loginForm";
import Dashboard from "./component/dashboard";

import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm  />} />
          <Route exact path="/dashboard" element={sessionStorage.getItem("isLoggedIn") === "true" ? <Dashboard /> : <LoginForm/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
