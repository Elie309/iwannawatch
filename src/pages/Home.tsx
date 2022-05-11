import React from 'react';

import { Link } from "react-router-dom";
import AppearingMenu from '../components/AppearingMenu';


const Home: React.FC = () => {


    return (
        <div className=''>
            <p className="bg-red-200">Home</p>
            <br />

            <Link to="/dashboard">Dashboard</Link>

            <br />

            <Link to="/new-element">New Element</Link>

                <br></br>
        </div>
    )

}

export default Home;
