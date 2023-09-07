import React, {createContext, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Countries from "./pages/Countries";
import DisplayCountry from "./pages/DisplayCountry";
import ThemeProvider from "./context/ThemeProvider";


function App() {

    return (
<ThemeProvider>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/countries" element={<Countries />} />
                    <Route path="countries/:countryName" element={<DisplayCountry />} />
                </Route>
                <Route path="*" element={<Navigate to="/countries" replace />} />
            </Routes>
        </Router>
</ThemeProvider>
    );
}

export default App;


