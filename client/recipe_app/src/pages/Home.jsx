import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'
import GlutenFree from "../components/GlutenFree";


function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Veggie />
            <Popular />
            <GlutenFree />
        </motion.div>
    )
}

export default Home;