import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetUserID } from '../hooks/useGetUserID';

function MyFavoriteRecipes() {
    const [recipes, setRecipes] = useState([]);
    const userID = useGetUserID();

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`http://localhost:3001/recipes/favoriteRecipes/${userID}`);
            if (response.ok) {
                const data = await response.json();
                setRecipes(data.favoriteRecipes || []);
            } else {
                console.error('Failed to fetch favorite recipes');
                setRecipes([]); // Set empty array on failure
            }
        } catch (err) {
            console.error('Error fetching favorite recipes:', err);
            setRecipes([]); // Set empty array on error
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <Grid>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Card key={recipe._id}>
                        <Link to={`/recipe/${recipe.recipeID}`}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </Link>
                    </Card>
                ))
            ) : (
                <p>No favorite recipes found</p>
            )}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default MyFavoriteRecipes;