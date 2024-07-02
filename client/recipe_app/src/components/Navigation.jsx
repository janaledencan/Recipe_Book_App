import styled from "styled-components";
import { GiCook } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";
import { MdAddCircleOutline } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";


function Navigation() {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <GiCook />
                <h4>Italian</h4>
            </SLink>

            <SLink to={'/cuisine/American'}>
                <IoFastFoodOutline />
                <h4>American</h4>
            </SLink >

            <SLink to={'/saved-recipes'}>
                <FaRegHeart />
                <h4>Favorite</h4>
            </SLink>

            <SLink to={'/myRecipes/'}>
                <GiCookingPot />
                <h4>My Recipes</h4>
            </SLink>

            <SLink to={'/create-recipe'}>
                <MdAddCircleOutline />
                <h4>Create Recipe</h4>
            </SLink>

        </List>
    )
}


const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        font-size:0.8rem;
    }

    svg{
        color: #8b0000;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color:white;
        }
        h4{
            color:white;  
        }
    }
`;


export default Navigation;