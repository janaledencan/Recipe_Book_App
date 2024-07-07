import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import { useCookies } from "react-cookie";
import "../index.css";

function SavedRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [cookies,] = useCookies(["access_token"]);
    const userID = useGetUserID();

    useEffect(() => {

        const fetchRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:3001/recipes");
                setRecipes(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        const fetchSavedRecipe = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
                );
                setSavedRecipes(response.data.savedRecipes);
                //console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRecipe();
        if (cookies.access_token) fetchSavedRecipe();

    }, []);

    const saveRecipe = async (recipeID) => {
        try {
            const response = await axios.put("http://localhost:3001/recipes", {
                recipeID,
                userID,
            }, { headers: { authorization: cookies.access_token } });
            console.log(response);
            setSavedRecipes(response.data.savedRecipes);
        } catch (err) {
            console.error(err);
        }
    };

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return (
        <div className='saved-recipes'>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe) => (
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
                            <button
                                className='btn-save'
                                onClick={() => saveRecipe(recipe._id)}
                                disabled={isRecipeSaved(recipe._id)}
                            >
                                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SavedRecipes