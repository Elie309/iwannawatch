import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import isSessionActive from "./Helpers/isSessionActive";


export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        try{
            const response = isSessionActive().then(res => {
                setLoggedIn(res);
            });
            
        }catch(error: any){
            setLoggedIn(false);
        }
    }, [])

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={<Home />}
                />

                <Route path='dashboard'
                    element={ loggedIn ? <Dashboard /> : <Navigate to="/login" />}
                />


                <Route path="login"
                    element={ !loggedIn  ? <Login /> : <Navigate to='/dashboard' />}
                />
                <Route path="register"
                    element={ !loggedIn ? <Register /> : <Navigate to='/dashboard' />}
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


