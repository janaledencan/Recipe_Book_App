import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Navigation from "../components/Navigation";

import React from 'react'

function Home() {
    return (
        <div>
            <Navigation />
            <Veggie />
            <Popular />
        </div>
    )
}

export default Home;