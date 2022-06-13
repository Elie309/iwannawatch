import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App: React.FC = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={<Home />}
                />

                <Route path='dashboard'

                    element={
                       <Dashboard />
                    }
                />

                <Route path="login"
                    element={
                        <Login />
                    }
                />
                <Route path="register"
                    element={
                        <Register />
                    }
                />



                {/* NO MATCH ROUTE */}
                <Route
                    path="*"
                    element={<div>404</div>}
                />


            </Routes>


        </BrowserRouter>
    );
}

export default App;