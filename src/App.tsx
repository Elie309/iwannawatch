import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const App: React.FC = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/"
                    element={<Home />}
                />

                <Route path='dashboard'

                    element={
                        <p className="font-bold underline-offset-2 ">Dashboard</p>
                    }
                />

                <Route path="new-element"
                    element={
                        <p> Add Element </p>
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