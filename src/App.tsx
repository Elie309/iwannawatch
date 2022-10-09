import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import isSessionActive from "./Helpers/isSessionActive";
import LoadingSpinner from "./components/Others/LoadingSpinner";
import Container from "./components/Others/Container";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";


enum LOADING_STATE {
    NOT_LOADING = -1,
    START = 0,
    LOADING = 1,
    FINISH = 2,
}

export default function App() {
    const [loading, setLoading] = useState<LOADING_STATE>(LOADING_STATE.START);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        try {
            setLoading(LOADING_STATE.LOADING);
            isSessionActive().then(res => {
                setLoading(LOADING_STATE.FINISH);
                setLoggedIn(res);
            });

        } catch (error: any) {
            setLoading(LOADING_STATE.FINISH);
            setLoggedIn(false);
        }
    }, [])


    const HelpRendering = (MainElement: JSX.Element | React.ReactElement, LoadingElement: JSX.Element | React.ReactElement, SpareElement: JSX.Element | React.ReactElement): JSX.Element | React.ReactElement => {

        if (loading === LOADING_STATE.START || loading === LOADING_STATE.LOADING) {
            return LoadingElement;
        }

        if (loggedIn && loading === LOADING_STATE.FINISH) {
            return MainElement;
        }
        return SpareElement;

    }


    return (
        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={<Home />}
                />

                <Route path='dashboard'
                    // element={HelpRendering(<Dashboard />, <LoadingSpinner />, <Navigate to="/login" replace={true} />)}
                    element={<Dashboard />}
                />


                <Route path="login"
                    element={HelpRendering(<Navigate to="/dashboard" replace={true} />, <LoadingSpinner />, <Container children={<Login />} />)}
                />
                <Route path="register"
                    element={HelpRendering(<Navigate to="/dashboard" replace={true} />, <LoadingSpinner />, <Container children={<Register />} />)}
                />

                <Route path="forgot-password">
                    <Route 
                        path=""
                        element={HelpRendering(<Navigate to="/dashboard" replace={true} />, <LoadingSpinner />, <Container children={<ForgotPassword />} />)}
                    />
                    <Route path=':token' element={
                        HelpRendering(<Navigate to="/dashboard" replace={true} />, <LoadingSpinner />, <Container children={<ResetPassword />} />)
                    }/>

                </Route>

                <Route path="email-verification" element={
                    HelpRendering(<Navigate to="/dashboard" replace={true} />, <LoadingSpinner />, <Container children={<EmailVerification data={{ username: "Elie309", email: 'elie309@outlook.fr' }} />} />)
                } />

                {/* NO MATCH ROUTE */}
                <Route
                    path="*"
                    element={<div>404</div>}
                />


            </Routes>


        </BrowserRouter>
    );
}



