import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const url = 'https://low-carb-recipes.p.rapidapi.com/random';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json(); //response.text();
            //console.log(data);
            setPopular(data);
        } catch (error) {
            console.error(error);
        }
    }

    /*return (
        <Wrapper>
            <h3>Popular Recipe</h3>
            <Card>
                <p>{popular.name}</p>
                <img src={popular.image} alt=" " />
                <p>{popular.description}</p>
            </Card>
        </Wrapper>

    )*/

    return (
        <Wrapper>
            <h3>Popular Recipes</h3>

            <Card>
                <p>{popular.name}</p>
                <img src={popular.image} alt={popular.name} />
                <p>{popular.description}</p>
            </Card>


        </Wrapper>
    );

}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
`;

export default Popular
