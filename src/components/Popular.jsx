import { useEffect } from "react";

function Popular() {


    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        //const api = await fetch(`https://low-carb-recipes.p.rapidapi.com/random?apiKey=${process.env.REACT_APP_API_KEY}`);
        //const data = await api.json();
        //console.log(data);

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
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>Popular</div>
    )
}

export default Popular
