import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Countries from "./pages/Countries";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/countries" element={<Countries />} />
                </Route>
                <Route path="*" element={<Navigate to="/countries" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
