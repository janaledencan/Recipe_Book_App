import { useEffect, useState } from "react";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        // const url = 'https://low-carb-recipes.p.rapidapi.com/random';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        //         'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const data = await response.json(); //response.text();
        //     //console.log(data);
        //     setPopular(data);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    return (
        <div>
            {/* <p>{popular.name}</p> */}
        </div>

    )
}

export default Popular
