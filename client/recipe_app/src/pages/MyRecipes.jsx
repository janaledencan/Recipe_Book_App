import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import "../index.css";

function MyRecipes() {
    const [savedRecipes, setSavedRecipes] = useState([]);

    const userID = useGetUserID();

    useEffect(() => {

        const fetchSavedRecipe = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recipes/savedRecipes/${userID}`
                );
                setSavedRecipes(response.data.savedRecipes);
                //console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSavedRecipe();

    }, []);



    return (
        <div className='saved-recipes'>
            <h1>Saved Recipes</h1>
            <ul>
                {savedRecipes.map((recipe) => (
                    <li key={recipe._id}>
                        <div className="myRecipe-container">
                            <h2>{recipe.name}</h2>
                            <div className='img-div'>
                                <img src={recipe.imageUrl} alt={recipe.name} />
                            </div>
                            <p>Ingredients: </p>
                            <p>{recipe.ingredients.join(', ')}</p>
                            <div className="myRecipes-txt">
                                <div className='instructions'>
                                    <p>{recipe.instructions}</p>
                                </div>
                                <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default MyRecipes