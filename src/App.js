import React from 'react';
import './App.css';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { Layout } from './components/Layout';
import { Countries } from './components/Header/Countries/Countries';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/countries" element={<Countries />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
