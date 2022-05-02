import React from 'react';

import { Link } from "react-router-dom";


const Home: React.FC = () => {


    return (
        <div className='text-3xl font-bold underline'>
            Home
            <br />

            <Link to="/dashboard">Dashboard</Link>

            <br />

            <Link to="/new-element">New Element</Link>


        </div>
    )

}

export default Home;
