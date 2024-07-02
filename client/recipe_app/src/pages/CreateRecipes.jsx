import React, { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function CreateRecipes() {

    const userID = useGetUserID();
    const [cookies,] = useCookies(["access_token"]);

    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID,

    });

    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    const handleIngredientChange = (event, idx) => {
        const { value } = event.target;
        const ingredients = recipe.ingredients;
        ingredients[idx] = value;
        setRecipe({ ...recipe, ingredients: ingredients });
    }

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })
    }
    //console.log(recipe);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipes", recipe,
                { headers: { authorization: cookies.access_token } }
            );
            alert("Recipe Created!");
            navigate("/saved-recipes")
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <div className='create-recipe'>
            <h2>Create Recipe</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' onChange={handleChange} />

                <label htmlFor="ingredients">Ingredients</label>
                {recipe.ingredients.map((ingredient, idx) => (
                    <input
                        key={idx}
                        type='text'
                        name='ingredients'
                        value={ingredient}
                        onChange={(event) => handleIngredientChange(event, idx)} />
                ))}
                <button onClick={addIngredient} type='button'> Add Ingredients</button>

                <label htmlFor="instructions">Instructions</label>
                <textarea id='instructions' name="instructions" onChange={handleChange}></textarea>

                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id='imageUrl' name='imageUrl' onChange={handleChange} />

                <label htmlFor="CookingTime">Cooking Time (minutes)</label>
                <input type="number" id='cookingTime' name='cookingTime' onChange={handleChange} />

                <button className='create-recipe-btn' type='submit'>Create Recipe</button>

            </form>
        </div>


    )
}

export default CreateRecipes