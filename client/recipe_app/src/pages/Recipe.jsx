import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUserID } from '../hooks/useGetUserID';
import { useCookies } from "react-cookie";

import React from 'react'

function Recipe() {

    let params = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const userID = useGetUserID();
    const [cookies,] = useCookies(["access_token"]);


    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData); //object
        console.log(detailData);
    }

    /*
    const saveRecipe = async () => {
        console.log(details);
        const response = await fetch('http://localhost:3001/favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: details.title,
                image: details.image,
                summary: details.summary,
                instructions: details.instructions,
                extendedIngredients: details.extendedIngredients,
            }),
        });

        if (response.ok) {
            navigate('/myRecipes');
        } else {
            console.error('Failed to save the recipe');
        }
    };
*/
    const saveFavoriteRecipe = async () => {
        const response = await fetch('http://localhost:3001/recipes/favorite', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: cookies.access_token
            },
            body: JSON.stringify({
                userID: userID,
                recipeID: params.name,
                title: details.title,
                image: details.image,
                summary: details.summary,
                instructions: details.instructions,
                extendedIngredients: details.extendedIngredients,
            }),
        });

        if (response.ok) {
            navigate('/myFavoriteRecipes');
        } else {
            console.error('Failed to save the recipe as favorite');
        }
    };


    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
                <button onClick={saveFavoriteRecipe}>Save as Favorite</button>
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div className="recipe-text">
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}

            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    }

    h2{
        margin-bottom: 2rem;
        font-size: 2rem;
        color:#ee6060;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;


const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;


export default Recipe