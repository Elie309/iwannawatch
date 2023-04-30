import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";

import LoadingSpinner from "./components/Others/LoadingSpinner";
import Container from "./components/Others/Container";

import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const EmailVerification = React.lazy(() => import("./pages/auth/EmailVerification"));



export default function App() {


    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);


    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true);

        } else {
            setLoggedIn(false);

        }


    })

    React.useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])



    const HelpRendering = (MainElement: JSX.Element | React.ReactElement, SpareElement: JSX.Element | React.ReactElement): JSX.Element | React.ReactElement => {


        return (

            <Suspense key={1} fallback={
                <div className='w-screen h-screen grid place-content-center'>
                    <LoadingSpinner />
                </div>
            }>
                {loggedIn && !isLoading && MainElement}
                {!loggedIn && !isLoading && SpareElement}
            </Suspense>
        )

    }



    return (
        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={<Home />}
                />

                <Route path='dashboard'
                    element={
                        HelpRendering(
                            <Dashboard />,
                            <Navigate to="/login" replace={true} />
                        )}
                />


                <Route path="login"
                    element={
                        HelpRendering(
                            <Navigate to="/dashboard" replace={true} />,
                            <Container children={<Login />} />
                        )}
                />
                <Route path="register"
                    element={
                        HelpRendering(<Navigate to="/dashboard" replace={true} />,
                            <Container children={<Register />} />
                        )}
                />

                <Route path="forgot-password"
                    element={
                        HelpRendering(<Navigate to="/dashboard" replace={true} />,
                            <Container children={<ForgotPassword />} />
                        )}
                />


                <Route path="email-verification" element={
                    HelpRendering(
                        // <Navigate to="/dashboard" replace={true} />,
                        <Container children={<EmailVerification />} />,
                        <Container children={<EmailVerification />} />
                    )}
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



