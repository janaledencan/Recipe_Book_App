import { useEffect, useState } from "react";
import styled from "styled-components";
import { GiCook } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <GiCook />
                <h4>Main</h4>
            </SLink>

            <SLink to={'/cuisine/American'}>
                <FaRegHeart />
                <h4>My Favorite</h4>
            </SLink >

            <SLink to={'/cuisine/Italian'}>
                <GiCook />
                <h4>Main</h4>
            </SLink>

            <SLink to={'/cuisine/American'}>
                <FaRegHeart />
                <h4>My Favorite</h4>
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
    border-radius: 50%;
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

`;

export default Navigation;