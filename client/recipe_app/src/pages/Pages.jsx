import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import Auth from './Auth';
import CreateRecipes from './CreateRecipes';
import SavedRecipes from './SavedRecipes';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MyRecipes from './MyRecipes';


function Pages() {
    const location = useLocation();
    return (

        <AnimatePresence mode='wait' >
            <Routes Location={location} key={location.pathname} >
                <Route path="/" element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path='/myRecipes/' element={<MyRecipes />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/create-recipe' element={<CreateRecipes />} />
                <Route path='/saved-recipes' element={<SavedRecipes />} />
            </Routes >
        </AnimatePresence>

    )
}

export default Pages